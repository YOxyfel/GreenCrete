document.addEventListener('DOMContentLoaded', function ()
{
    const testimonials = [
        {
            name: 'Иван Петров',
            role: 'Архитект, София',
            text: 'Работата с GreenCrete беше изключително професионална. Техните устойчиви решения не само отговарят на екологичните стандарти, но и превъзхождат очакванията по отношение на качеството.',
            rating: 5
        },
        {
            name: 'Мария Георгиева',
            role: 'Проектен Мениджър, Пловдив',
            text: 'Проектът с GreenCrete беше изпълнен в срок и с най-високи стандарти. Клиентите ни са много доволни от резултата и екологичния подход.',
            rating: 5
        },
        {
            name: 'Димитър Стоянов',
            role: 'Строителен Инженер, Варна',
            text: 'Най-добрият избор за устойчиво строителство. Продуктите им са иновативни, качествени и отговарят на всички изисквания за LEED сертификация.',
            rating: 5
        },
        {
            name: 'Елена Димитрова',
            role: 'Инвеститор, Бургас',
            text: 'Инвестицията в GreenCrete решения се оказа много добра. Не само намалихме разходите, но и получихме признание за екологичния подход.',
            rating: 5
        }
    ];

    let currentTestimonial = 0;

    function renderTestimonials ()
    {
        const slider = document.getElementById('testimonialsSlider');
        const dots = document.getElementById('testimonialDots');
        
        if (!slider || !dots) return;
        
        slider.innerHTML = '';
        dots.innerHTML = '';
        
        testimonials.forEach(function (testimonial, index)
        {
            const slide = document.createElement('div');
            slide.className = `testimonial-slide ${index === currentTestimonial ? 'active' : ''}`;
            slide.innerHTML = `
                <div class="testimonial-content">
                    <div class="testimonial-rating">
                        ${'⭐'.repeat(testimonial.rating)}
                    </div>
                    <p class="testimonial-text">"${testimonial.text}"</p>
                    <div class="testimonial-author">
                        <strong>${testimonial.name}</strong>
                        <span>${testimonial.role}</span>
                    </div>
                </div>
            `;
            slider.appendChild(slide);
            
            const dot = document.createElement('button');
            dot.className = `testimonial-dot ${index === currentTestimonial ? 'active' : ''}`;
            dot.addEventListener('click', function ()
            {
                currentTestimonial = index;
                renderTestimonials();
            });
            dots.appendChild(dot);
        });
    }

    const prevBtn = document.querySelector('.testimonial-prev');
    const nextBtn = document.querySelector('.testimonial-next');
    
    if (prevBtn)
    {
        prevBtn.addEventListener('click', function ()
        {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            renderTestimonials();
        });
    }
    
    if (nextBtn)
    {
        nextBtn.addEventListener('click', function ()
        {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            renderTestimonials();
        });
    }

    setInterval(function ()
    {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        renderTestimonials();
    }, 5000);

    renderTestimonials();

    function animateCounter (element, target, duration)
    {
        if (!duration) duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(function ()
        {
            current += increment;
            if (current >= target)
            {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            }
            else
            {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }

    const impactObserver = new IntersectionObserver(function (entries)
    {
        entries.forEach(function (entry)
        {
            if (entry.isIntersecting && !entry.target.dataset.animated)
            {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.impact-number').forEach(function (num)
    {
        impactObserver.observe(num);
    });

    const processObserver = new IntersectionObserver(function (entries)
    {
        entries.forEach(function (entry, index)
        {
            if (entry.isIntersecting)
            {
                setTimeout(function ()
                {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.process-step').forEach(function (step)
    {
        step.style.opacity = '0';
        step.style.transform = 'translateY(50px)';
        step.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        processObserver.observe(step);
    });

    const subscriptionBtn = document.getElementById('subscriptionBtn');
    if (subscriptionBtn)
    {
        subscriptionBtn.addEventListener('click', function (e)
        {
            e.preventDefault();
            const email = document.getElementById('subscriptionEmail').value;
            if (email && email.includes('@'))
            {
                this.textContent = 'Изпраща се...';
                setTimeout(function ()
                {
                    alert('Благодарим! Ще се свържем с вас скоро.');
                    document.getElementById('subscriptionEmail').value = '';
                    subscriptionBtn.textContent = 'Свържете се с Нас';
                }, 1500);
            }
            else
            {
                alert('Моля, въведете валиден имейл адрес.');
            }
        });
    }

    document.querySelectorAll('.quality-card').forEach(function (card, index)
    {
        card.addEventListener('mouseenter', function ()
        {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function ()
        {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    const infoBeltObserver = new IntersectionObserver(function (entries)
    {
        entries.forEach(function (entry)
        {
            if (entry.isIntersecting)
            {
                const h1 = entry.querySelector('h1');
                if (h1 && !h1.dataset.animated)
                {
                    const text = h1.textContent;
                    if (text.includes('%'))
                    {
                        const num = parseInt(text);
                        animateCounter(h1, num, 1500);
                        h1.dataset.animated = 'true';
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.info-belt > div').forEach(function (div)
    {
        infoBeltObserver.observe(div);
    });
});
