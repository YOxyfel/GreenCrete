document.addEventListener('DOMContentLoaded', function ()
{
    const offices = [
        {
            city: 'София',
            address: 'бул. Цариградско шосе 125',
            phone: '+359 2 123 4567',
            email: 'sofia@greencrete.bg',
            hours: 'Пн-Пт: 9:00-18:00'
        },
        {
            city: 'Пловдив',
            address: 'ул. Марица 45',
            phone: '+359 32 123 456',
            email: 'plovdiv@greencrete.bg',
            hours: 'Пн-Пт: 9:00-17:00'
        },
        {
            city: 'Варна',
            address: 'бул. Приморски 12',
            phone: '+359 52 123 456',
            email: 'varna@greencrete.bg',
            hours: 'Пн-Пт: 9:00-17:00'
        }
    ];

    function createOfficeCard (office)
    {
        const card = document.createElement('div');
        card.className = 'office-card';
        card.innerHTML = `
            <h3>${office.city}</h3>
            <p><i class="fas fa-map-marker-alt"></i> ${office.address}</p>
            <p><i class="fas fa-phone"></i> ${office.phone}</p>
            <p><i class="fas fa-envelope"></i> ${office.email}</p>
            <p><i class="fas fa-clock"></i> ${office.hours}</p>
        `;
        return card;
    }

    const officesGrid = document.getElementById('officesGrid');
    if (officesGrid)
    {
        offices.forEach(function (office)
        {
            officesGrid.appendChild(createOfficeCard(office));
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm)
    {
        contactForm.addEventListener('submit', function (e)
        {
            e.preventDefault();
            
            const name = document.getElementById('contactName').value;
            const surname = document.getElementById('contactSurname').value;
            const email = document.getElementById('contactEmail').value;
            const phone = document.getElementById('contactPhone').value;
            const subject = document.getElementById('contactSubject').value;
            const message = document.getElementById('contactMessage').value;
            
            if (name && surname && email && subject && message)
            {
                const submitBtn = this.querySelector('.submit-contact-btn');
                submitBtn.textContent = 'Изпраща се...';
                submitBtn.disabled = true;
                
                setTimeout(function ()
                {
                    alert('Благодарим за съобщението! Ще се свържем с вас скоро.');
                    contactForm.reset();
                    submitBtn.textContent = 'Изпрати Съобщение';
                    submitBtn.disabled = false;
                }, 1500);
            }
            else
            {
                alert('Моля, попълнете всички задължителни полета.');
            }
        });
    }

    const mapContainer = document.getElementById('mapContainer');
    if (mapContainer)
    {
        const placeholder = mapContainer.querySelector('.map-placeholder');
        if (placeholder)
        {
            let mapLoaded = false;
            
            placeholder.addEventListener('click', function ()
            {
                if (!mapLoaded)
                {
                    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i><p>Зареждане на картата...</p>';
                    
                    setTimeout(function ()
                    {
                        mapLoaded = true;
                        mapContainer.innerHTML = `
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.5!2d23.3219!3d42.6975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDQxJzUxLjAiTiAyM8KwMTknMTguOSJF!5e0!3m2!1sen!2sbg!4v1234567890" 
                                width="100%" 
                                height="100%" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        `;
                    }, 1500);
                }
            });
            
            placeholder.style.cursor = 'pointer';
        }
    }

    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(function (link)
    {
        link.addEventListener('mouseenter', function ()
        {
            this.style.transform = 'scale(1.2) rotate(5deg)';
        });
        link.addEventListener('mouseleave', function ()
        {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});
