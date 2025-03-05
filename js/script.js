/* Base styles */
:root {
    --primary-color: #0077b5;
    --secondary-color: #00a0dc;
    --dark-color: #283e4a;
    --light-color: #f5f5f5;
    --text-color: #333;
    --light-text: #666;
    --white: #fff;
    --border-color: #ddd;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--light-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

a {
    text-decoration: none;
    color: var(--primary-color);
}

/* Header styles */
header {
    background-color: var(--white);
    padding: 40px 0;
    box-shadow: var(--shadow);
}

.profile {
    display: flex;
    align-items: center;
    gap: 30px;
}

.profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--primary-color);
}

.profile-content h1 {
    font-size: 2.5rem;
    margin-bottom: 5px;
    color: var(--dark-color);
}

.profile-content h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--primary-color);
    margin-bottom: 10px;
}

.social-links {
    margin-top: 15px;
}

.social-links a {
    display: inline-block;
    margin-right: 15px;
    font-size: 1.5rem;
    color: var(--dark-color);
    transition: color 0.3s;
}

.social-links a:hover {
    color: var(--primary-color);
}

/* Navigation styles */
nav {
    background-color: var(--dark-color);
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 100;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: var(--white);
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

nav ul li a:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

/* Section styles */
.section {
    padding: 60px 0;
    background-color: var(--white);
    margin-bottom: 30px;
    border-radius: 8px;
    box-shadow: var(--shadow);
}

.section-title {
    font-size: 2rem;
    color: var(--dark-color);
    margin-bottom: 30px;
    padding-bottom: 10px;
    border-bottom: 2px solid var(--primary-color);
}

/* Timeline styles */
.timeline {
    position: relative;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 20px;
    height: 100%;
    width: 2px;
    background-color: var(--primary-color);
}

.timeline-item {
    margin-bottom: 30px;
    position: relative;
    padding-left: 50px;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: 11px;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--primary-color);
}

.timeline-content h3 {
    font-size: 1.3rem;
    color: var(--dark-color);
    margin-bottom: 5px;
}

.timeline-content h4 {
    font-size: 1.1rem;
    color: var(--primary-color);
    margin-bottom: 5px;
    font-weight: 500;
}

.timeline-date {
    font-size: 0.9rem;
    color: var(--light-text);
    margin-bottom: 10px;
}

/* Certifications styles */
.certifications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.certification-item {
    background-color: var(--light-color);
    padding: 20px;
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: transform 0.3s;
}

.certification-item:hover {
    transform: translateY(-5px);
}

.certification-item h3 {
    font-size: 1.1rem;
    color: var(--dark-color);
    margin-bottom: 10px;
}

.certification-item p {
    color: var(--light-text);
    margin-bottom: 5px;
}

/* Projects styles */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 25px;
}

.project-item {
    background-color: var(--light-color);
    padding: 25px;
    border-radius: 8px;
    box-shadow: var(--shadow);
    transition: transform 0.3s;
}

.project-item:hover {
    transform: translateY(-5px);
}

.project-item h3 {
    font-size: 1.2rem;
    color: var(--dark-color);
    margin-bottom: 10px;
}

.project-date {
    font-size: 0.9rem;
    color: var(--light-text);
    margin-bottom: 10px;
}

/* Skills styles */
.skills-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}

.skill-category h3 {
    font-size: 1.3rem;
    color: var(--dark-color);
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 1px solid var(--border-color);
}

.skills-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-item {
    background-color: var(--light-color);
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    color: var(--dark-color);
    border: 1px solid var(--border-color);
}

/* Footer styles */
footer {
    background-color: var(--dark-color);
    color: var(--white);
    padding: 20px 0;
    text-align: center;
}

/* Responsive styles */
@media (max-width: 768px) {
    .profile {
        flex-direction: column;
        text-align: center;
    }
    
    nav ul {
        flex-wrap: wrap;
    }
    
    nav ul li {
        margin: 5px;
    }
    
    .certifications-grid,
    .projects-grid,
    .skills-container {
        grid-template-columns: 1fr;
    }
}
