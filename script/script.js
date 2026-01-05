const current = window.location.pathname.split('/').pop() || 'index.html';

document.querySelectorAll('.menu a').forEach(link => 
    {
  const href = link.getAttribute('href');
  if (href === current) 
    {
    link.classList.add('active');
  }
});


function openMenu()
{
  const hamburgerListContainer = document.querySelector(".drop-menu");

  hamburgerListContainer.classList.toggle("active-menu");
}

(function ()
{
  const cube = document.querySelector('.cube');
  if (!cube) return;

  const heroRight = document.querySelector('.hero-right');
  if (!heroRight) return;

  let isMouseNear = false;
  let shouldBeMouseNear = false;
  let mouseX = 0;
  let mouseY = 0;
  let currentRotationX = 0;
  let currentRotationY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;
  let animationRotation = 0;
  const rotationSpeed = 0.15;
  const proximityDistance = 500;
  const transitionDelay = 300;
  let animationId = null;
  let modeSwitchTimeout = null;
  let lastAnimationTime = Date.now();

  function getCubeCenter ()
  {
    const rect = cube.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
  }

  function getDistance (x1, y1, x2, y2)
  {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  }

  function animateRotation ()
  {
    const now = Date.now();
    const deltaTime = (now - lastAnimationTime) / 1000; // Convert to seconds
    lastAnimationTime = now;

    if (isMouseNear)
    {
      currentRotationX += (targetRotationX - currentRotationX) * rotationSpeed;
      currentRotationY += (targetRotationY - currentRotationY) * rotationSpeed;
      
      cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
      cube.style.animation = 'none';
      cube.style.transition = 'none';
    }
    else
    {
      animationRotation += deltaTime * 24;
      if (animationRotation >= 360) animationRotation -= 360;
      
      const blendSpeed = 0.03;
      const targetX = 0;
      const targetY = animationRotation;
      
      let diffY = targetY - currentRotationY;
      if (diffY > 180) diffY -= 360;
      if (diffY < -180) diffY += 360;
      
      currentRotationX += (targetX - currentRotationX) * blendSpeed;
      currentRotationY += diffY * blendSpeed;
      
      if (currentRotationY >= 360) currentRotationY -= 360;
      if (currentRotationY < 0) currentRotationY += 360;
      
      cube.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
      cube.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      
      if (Math.abs(currentRotationX) < 2 && Math.abs(diffY) < 10)
      {
        const animationStart = currentRotationY;
        
        cube.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() =>
        {
          cube.style.animation = 'rotateCube 15s linear infinite';
          cube.style.transform = '';
          cube.style.transition = '';
        }, 100);
      }
    }
    
    animationId = requestAnimationFrame(animateRotation);
  }

  function scheduleModeSwitch (newState)
  {
    shouldBeMouseNear = newState;
    
    if (modeSwitchTimeout)
    {
      clearTimeout(modeSwitchTimeout);
    }
    
    if (newState && !isMouseNear)
    {
      isMouseNear = true;
    }
    else if (!newState && isMouseNear)
    {
      modeSwitchTimeout = setTimeout(() =>
      {
        if (!shouldBeMouseNear && isMouseNear)
        {
          isMouseNear = false;
          
          const transform = cube.style.transform;
          if (transform)
          {
            const match = transform.match(/rotateY\(([-\d.]+)deg\)/);
            if (match)
            {
              animationRotation = parseFloat(match[1]) % 360;
              if (animationRotation < 0) animationRotation += 360;
            }
          }
        }
      }, transitionDelay);
    }
  }

  function handleMouseMove (e)
  {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    const cubeCenter = getCubeCenter();
    const distance = getDistance(mouseX, mouseY, cubeCenter.x, cubeCenter.y);
    
    if (distance < proximityDistance)
    {
      const deltaX = mouseX - cubeCenter.x;
      const deltaY = mouseY - cubeCenter.y;
      
      const normalizedDistance = Math.min(distance / proximityDistance, 1);
      const influenceFactor = 1 - (normalizedDistance * 0.3);
      
      targetRotationY = (deltaX / proximityDistance) * 45 * influenceFactor;
      targetRotationX = -(deltaY / proximityDistance) * 45 * influenceFactor;
      
      scheduleModeSwitch(true);
    }
    else
    {
      scheduleModeSwitch(false);
      targetRotationX = 0;
      targetRotationY = 0;
    }
  }

  function handleTouchMove (e)
  {
    if (e.touches.length > 0)
    {
      const touch = e.touches[0];
      mouseX = touch.clientX;
      mouseY = touch.clientY;
      
      const cubeCenter = getCubeCenter();
      const distance = getDistance(mouseX, mouseY, cubeCenter.x, cubeCenter.y);
      
      if (distance < proximityDistance)
      {
        const deltaX = mouseX - cubeCenter.x;
        const deltaY = mouseY - cubeCenter.y;
        
        const normalizedDistance = Math.min(distance / proximityDistance, 1);
        const influenceFactor = 1 - (normalizedDistance * 0.3);
        
        targetRotationY = (deltaX / proximityDistance) * 45 * influenceFactor;
        targetRotationX = -(deltaY / proximityDistance) * 45 * influenceFactor;
        
        scheduleModeSwitch(true);
      }
      else
      {
        scheduleModeSwitch(false);
        targetRotationX = 0;
        targetRotationY = 0;
      }
    }
  }

  animateRotation();
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('touchmove', handleTouchMove, { passive: true });
  
  window.addEventListener('beforeunload', () =>
  {
    if (animationId)
    {
      cancelAnimationFrame(animationId);
    }
    if (modeSwitchTimeout)
    {
      clearTimeout(modeSwitchTimeout);
    }
  });
})();

let card = document.querySelector(".card-link");
if (card)
{
  card.addEventListener('mouseenter', function ()
  {
    console.log("Hi");
    let linkBackground = card.querySelector("a");
    console.log(linkBackground);
    linkBackground.classList.toggle("link-hover-effect")
  });
}