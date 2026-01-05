document.addEventListener('DOMContentLoaded', function ()
{
    const partners = {
        industrial: [
            { name: 'EcoBuild Solutions', logo: '🏭', description: 'Водещ производител на екологични строителни материали', since: '2020' },
            { name: 'GreenTech Industries', logo: '🏗️', description: 'Инновации в устойчивото строителство', since: '2021' },
            { name: 'Sustainable Materials Co.', logo: '♻️', description: 'Специализация в рециклиране на материали', since: '2019' },
            { name: 'EcoConcrete Systems', logo: '🏢', description: 'Системи за екологичен бетон', since: '2022' }
        ],
        academic: [
            { name: 'Технически Университет София', logo: '🎓', description: 'Съвместни изследователски проекти', since: '2018' },
            { name: 'Университет по Архитектура', logo: '📐', description: 'Разработка на нови строителни методи', since: '2019' },
            { name: 'Институт за Устойчиво Развитие', logo: '🔬', description: 'Изследвания в областта на устойчивостта', since: '2020' }
        ],
        strategic: [
            { name: 'LEED Certification Board', logo: '✅', description: 'Официален партньор за сертификация', since: '2019' },
            { name: 'Green Building Council', logo: '🌿', description: 'Член на съвета за зелено строителство', since: '2018' },
            { name: 'European Sustainability Alliance', logo: '🇪🇺', description: 'Стратегическо партньорство на европейско ниво', since: '2021' }
        ]
    };

    function createPartnerCard (partner)
    {
        const card = document.createElement('div');
        card.className = 'partner-card';
        card.innerHTML = `
            <div class="partner-logo">${partner.logo}</div>
            <h4>${partner.name}</h4>
            <p>${partner.description}</p>
            <span class="partner-since">Партньор от ${partner.since}</span>
        `;
        
        card.addEventListener('mouseenter', function ()
        {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function ()
        {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        return card;
    }

    const industrialGrid = document.getElementById('industrialPartners');
    const academicGrid = document.getElementById('academicPartners');
    const strategicGrid = document.getElementById('strategicPartners');

    if (industrialGrid)
    {
        partners.industrial.forEach(function (partner)
        {
            industrialGrid.appendChild(createPartnerCard(partner));
        });
    }

    if (academicGrid)
    {
        partners.academic.forEach(function (partner)
        {
            academicGrid.appendChild(createPartnerCard(partner));
        });
    }

    if (strategicGrid)
    {
        partners.strategic.forEach(function (partner)
        {
            strategicGrid.appendChild(createPartnerCard(partner));
        });
    }

    const submitBtn = document.querySelector('.submit-partner-btn');
    if (submitBtn)
    {
        submitBtn.addEventListener('click', function (e)
        {
            e.preventDefault();
            const name = document.getElementById('companyName').value;
            const email = document.getElementById('partnerEmail').value;
            const message = document.getElementById('partnerMessage').value;
            
            if (name && email && message)
            {
                alert('Благодарим за заявката! Ще се свържем с вас скоро.');
                document.getElementById('companyName').value = '';
                document.getElementById('partnerEmail').value = '';
                document.getElementById('partnerMessage').value = '';
            }
            else
            {
                alert('Моля, попълнете всички полета.');
            }
        });
    }
});
