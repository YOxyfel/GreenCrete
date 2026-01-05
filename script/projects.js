document.addEventListener('DOMContentLoaded', function ()
{
    const projects = [
        {
            id: 1,
            title: 'Ботаническа Градина - София',
            location: 'София, България',
            date: '2024',
            description: 'Инсталация на пропускливи бетонни павета в главната алея на Ботаническата градина. Проектът намалява оттичането с 85% и подхранва растителността.',
            specs: ['Hydro-Flow', '5000 m²', 'LEED Gold'],
            icon: '🌳',
            stats: {
                area: 5000,
                co2Reduction: 85,
                waterSaved: 12000,
                completion: 100
            },
            timeline: [
                { phase: 'Планиране', date: '2024-01', progress: 100 },
                { phase: 'Подготовка', date: '2024-02', progress: 100 },
                { phase: 'Изпълнение', date: '2024-03', progress: 100 },
                { phase: 'Завършване', date: '2024-04', progress: 100 }
            ],
            color: '#4CAF50'
        },
        {
            id: 2,
            title: 'Търговски Център - Пловдив',
            location: 'Пловдив, България',
            date: '2023',
            description: 'Използване на рециклиран агрегат бетон за основите на нов търговски център. Намаляване на CO2 емисиите с 42%.',
            specs: ['Рециклиран Агрегат', '12000 m²', 'LEED Platinum'],
            icon: '🏢',
            stats: {
                area: 12000,
                co2Reduction: 42,
                recycledMaterial: 100,
                completion: 100
            },
            timeline: [
                { phase: 'Планиране', date: '2023-01', progress: 100 },
                { phase: 'Подготовка', date: '2023-03', progress: 100 },
                { phase: 'Изпълнение', date: '2023-05', progress: 100 },
                { phase: 'Завършване', date: '2023-08', progress: 100 }
            ],
            color: '#2196F3'
        },
        {
            id: 3,
            title: 'Градска Площад - Варна',
            location: 'Варна, България',
            date: '2024',
            description: 'Реновация на централния площад с Cool-Crete смеси. Намаляване на температурата с 6°C през лятото.',
            specs: ['Cool-Crete', '8000 m²', 'LEED Gold'],
            icon: '🌆',
            stats: {
                area: 8000,
                tempReduction: 6,
                energySaved: 35,
                completion: 100
            },
            timeline: [
                { phase: 'Планиране', date: '2024-02', progress: 100 },
                { phase: 'Подготовка', date: '2024-03', progress: 100 },
                { phase: 'Изпълнение', date: '2024-04', progress: 100 },
                { phase: 'Завършване', date: '2024-06', progress: 100 }
            ],
            color: '#FF9800'
        },
        {
            id: 4,
            title: 'Жилищен Комплекс - Бургас',
            location: 'Бургас, България',
            date: '2023',
            description: 'Декоративен еко бетон за външни пространства на нов жилищен комплекс. Комбинация от естетика и екология.',
            specs: ['Декоративен Еко', '3500 m²', 'LEED Silver'],
            icon: '🏠',
            stats: {
                area: 3500,
                aesthetic: 95,
                ecoScore: 88,
                completion: 100
            },
            timeline: [
                { phase: 'Планиране', date: '2023-03', progress: 100 },
                { phase: 'Подготовка', date: '2023-04', progress: 100 },
                { phase: 'Изпълнение', date: '2023-06', progress: 100 },
                { phase: 'Завършване', date: '2023-09', progress: 100 }
            ],
            color: '#9C27B0'
        },
        {
            id: 5,
            title: 'Университетски Кампус - София',
            location: 'София, България',
            date: '2024',
            description: 'Комплексен проект с комбинация от всички наши продукти. Модел за устойчиво строителство в образователни институции.',
            specs: ['Комплексен', '15000 m²', 'LEED Platinum'],
            icon: '🎓',
            stats: {
                area: 15000,
                products: 4,
                students: 5000,
                completion: 100
            },
            timeline: [
                { phase: 'Планиране', date: '2024-01', progress: 100 },
                { phase: 'Подготовка', date: '2024-02', progress: 100 },
                { phase: 'Изпълнение', date: '2024-03', progress: 100 },
                { phase: 'Завършване', date: '2024-08', progress: 100 }
            ],
            color: '#F44336'
        },
        {
            id: 6,
            title: 'Паркинг Площ - Русе',
            location: 'Русе, България',
            date: '2023',
            description: 'Пропусклив бетон за голяма паркинг площ. Намалява нуждата от дренажни системи и подхранва подпочвените води.',
            specs: ['Hydro-Flow', '10000 m²', 'LEED Gold'],
            icon: '🅿️',
            stats: {
                area: 10000,
                parkingSpots: 250,
                waterSaved: 20000,
                completion: 100
            },
            timeline: [
                { phase: 'Планиране', date: '2023-02', progress: 100 },
                { phase: 'Подготовка', date: '2023-03', progress: 100 },
                { phase: 'Изпълнение', date: '2023-05', progress: 100 },
                { phase: 'Завършване', date: '2023-07', progress: 100 }
            ],
            color: '#00BCD4'
        }
    ];

    let currentProject = null;
    let particles = [];

    function createParticle (x, y, color)
    {
        return {
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            color: color,
            size: Math.random() * 3 + 1
        };
    }

    function updateParticles ()
    {
        const canvas = document.getElementById('particleCanvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles = particles.filter(function (p)
        {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 0.02;
            
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            
            return p.life > 0;
        });
        
        requestAnimationFrame(updateParticles);
    }

    function initParticleCanvas ()
    {
        const container = document.querySelector('.projects-content');
        if (!container) return;
        
        const canvas = document.createElement('canvas');
        canvas.id = 'particleCanvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1';
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        document.body.appendChild(canvas);
        
        window.addEventListener('resize', function ()
        {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
        
        updateParticles();
    }

    function createProjectCard (project)
    {
        const card = document.createElement('div');
        card.className = 'project-card-interactive';
        card.dataset.projectId = project.id;
        card.style.setProperty('--project-color', project.color);
        
        card.innerHTML = `
            <div class="project-card-header">
                <div class="project-icon-large">${project.icon}</div>
                <div class="project-header-text">
                    <h3>${project.title}</h3>
                    <p class="project-location"><i class="fas fa-map-marker-alt"></i> ${project.location}</p>
                </div>
            </div>
            <div class="project-card-body">
                <p class="project-description">${project.description}</p>
                <div class="project-stats-preview">
                    <div class="stat-item">
                        <span class="stat-value">${project.stats.area.toLocaleString()}</span>
                        <span class="stat-label">m²</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">${project.date}</span>
                        <span class="stat-label">Година</span>
                    </div>
                </div>
            </div>
            <div class="project-card-footer">
                <div class="project-specs">
                    ${project.specs.map(function (spec) { return `<span class="spec-tag">${spec}</span>`; }).join('')}
                </div>
                <button class="view-project-btn" data-id="${project.id}">
                    Виж Детайли <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        card.addEventListener('mouseenter', function ()
        {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.boxShadow = `0 20px 40px rgba(0,0,0,0.2), 0 0 30px ${project.color}40`;
            
            const rect = this.getBoundingClientRect();
            for (let i = 0; i < 20; i++)
            {
                particles.push(createParticle(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2,
                    project.color
                ));
            }
        });
        
        card.addEventListener('mouseleave', function ()
        {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
        
        card.querySelector('.view-project-btn').addEventListener('click', function (e)
        {
            e.stopPropagation();
            showProjectDetails(project);
        });
        
        return card;
    }

    function showProjectDetails (project)
    {
        currentProject = project;
        
        const modal = document.createElement('div');
        modal.className = 'project-modal';
        modal.innerHTML = `
            <div class="project-modal-content">
                <span class="close-modal">&times;</span>
                <div class="project-modal-header" style="background: linear-gradient(135deg, ${project.color} 0%, ${project.color}dd 100%);">
                    <div class="project-modal-icon">${project.icon}</div>
                    <div style="flex: 1;">
                        <h2>${project.title}</h2>
                        <p><i class="fas fa-map-marker-alt"></i> ${project.location} | <i class="fas fa-calendar"></i> ${project.date}</p>
                    </div>
                </div>
                <div class="project-modal-body">
                    <div class="project-description-full">
                        <h3>Описание на Проекта</h3>
                        <p>${project.description}</p>
                    </div>
                    
                    <div class="project-stats-detailed">
                        <h3>Статистики</h3>
                        <div class="stats-grid" id="statsGrid${project.id}">
                        </div>
                    </div>
                    
                    <div class="project-timeline">
                        <h3>Времева Линия</h3>
                        <div class="timeline-container" id="timeline${project.id}">
                        </div>
                    </div>
                    
                    <div class="project-specs-detailed">
                        <h3>Спецификации</h3>
                        <div class="specs-list">
                            ${project.specs.map(function (spec) { return `<span class="spec-badge">${spec}</span>`; }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        const statsGrid = modal.querySelector(`#statsGrid${project.id}`);
        Object.entries(project.stats).forEach(function ([key, value])
        {
            if (key !== 'completion')
            {
                const statCard = document.createElement('div');
                statCard.className = 'stat-card-detailed';
                statCard.innerHTML = `
                    <div class="stat-card-value">${typeof value === 'number' ? value.toLocaleString() : value}</div>
                    <div class="stat-card-label">${getStatLabel(key)}</div>
                    <div class="stat-card-bar">
                        <div class="stat-card-progress" style="width: ${Math.min(value, 100)}%; background: ${project.color}"></div>
                    </div>
                `;
                statsGrid.appendChild(statCard);
            }
        });
        
        const timeline = modal.querySelector(`#timeline${project.id}`);
        project.timeline.forEach(function (phase, index)
        {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.innerHTML = `
                <div class="timeline-marker" style="background: ${project.color}"></div>
                <div class="timeline-content">
                    <h4>${phase.phase}</h4>
                    <p>${phase.date}</p>
                    <div class="timeline-progress">
                        <div class="timeline-progress-bar" style="width: ${phase.progress}%; background: ${project.color}"></div>
                    </div>
                </div>
            `;
            timeline.appendChild(timelineItem);
        });
        
        setTimeout(function ()
        {
            modal.querySelectorAll('.stat-card-progress').forEach(function (bar)
            {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(function ()
                {
                    bar.style.transition = 'width 1s ease-out';
                    bar.style.width = width;
                }, 100);
            });
        }, 100);
        
        modal.querySelector('.close-modal').addEventListener('click', function ()
        {
            modal.style.opacity = '0';
            setTimeout(function () { modal.remove(); }, 300);
        });
        
        modal.addEventListener('click', function (e)
        {
            if (e.target === modal)
            {
                modal.style.opacity = '0';
                setTimeout(function () { modal.remove(); }, 300);
            }
        });
    }

    function getStatLabel (key)
    {
        const labels = {
            area: 'Площ (m²)',
            co2Reduction: 'Намаление CO2 (%)',
            waterSaved: 'Спестена Вода (л)',
            tempReduction: 'Намаление Темп. (°C)',
            energySaved: 'Спестена Енергия (%)',
            recycledMaterial: 'Рециклиран Материал (%)',
            aesthetic: 'Естетика (%)',
            ecoScore: 'Еко Оценка (%)',
            products: 'Брой Продукти',
            students: 'Студенти',
            parkingSpots: 'Паркоместа'
        };
        return labels[key] || key;
    }

    let currentFilter = 'all';
    let searchQuery = '';

    function filterProjects ()
    {
        const grid = document.querySelector('.projects-grid');
        if (!grid) return;
        
        grid.innerHTML = '';
        
        const filtered = projects.filter(function (project)
        {
            const matchesFilter = currentFilter === 'all' || 
                project.date.includes(currentFilter) ||
                project.specs.some(function (spec) { return spec.includes(currentFilter); });
            
            const matchesSearch = searchQuery === '' ||
                project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());
            
            return matchesFilter && matchesSearch;
        });
        
        if (filtered.length === 0)
        {
            grid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem;">
                    <i class="fas fa-search" style="font-size: 64px; color: var(--p-color); margin-bottom: 1rem; opacity: 0.5;"></i>
                    <h3 style="color: var(--nav-bg); margin-bottom: 0.5rem;">Няма намерени проекти</h3>
                    <p style="color: var(--p-color);">Опитайте с различни критерии за търсене</p>
                </div>
            `;
        }
        else
        {
            filtered.forEach(function (project)
            {
                grid.appendChild(createProjectCard(project));
            });
        }
        
        setTimeout(function ()
        {
            document.querySelectorAll('.project-card-interactive').forEach(function (card)
            {
                card.style.opacity = '0';
                card.style.transform = 'translateY(50px)';
                card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.observe(card);
            });
        }, 100);
    }

    function renderProjects ()
    {
        filterProjects();
    }

    const searchInput = document.getElementById('projectSearch');
    if (searchInput)
    {
        searchInput.addEventListener('input', function ()
        {
            searchQuery = this.value;
            filterProjects();
        });
    }

    document.querySelectorAll('.filter-btn').forEach(function (btn)
    {
        btn.addEventListener('click', function ()
        {
            document.querySelectorAll('.filter-btn').forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            filterProjects();
        });
    });

    initParticleCanvas();
    renderProjects();
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function (entries)
    {
        entries.forEach(function (entry)
        {
            if (entry.isIntersecting)
            {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    setTimeout(function ()
    {
        document.querySelectorAll('.project-card-interactive').forEach(function (card)
        {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(card);
        });
    }, 100);
});
