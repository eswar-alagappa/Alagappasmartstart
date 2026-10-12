import { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhySection } from './WhySection';
import { SectionHeading } from './SectionHeading';
import { asset } from '../data';

function InfrastructureSection() {
    return (
        <section className="section about-infra-section">
            <div className="container">
                <SectionHeading
                    eyebrow="Campus & Spaces"
                    title="Our School Infrastructure"
                    align="center"
                />

                <div className="about-infra-img-wrap">
                    <img
                        src={asset('images/School_front.png')}
                        alt="Alagappa Smart Start Play School campus"
                        className="about-infra-img"
                    />
                </div>

                <div className="about-infra-body">
                    <p>
                        Our Smart Class Play School is thoughtfully designed as a vibrant world where learning meets
                        joy, creativity, and care. Every corner of the campus reflects a deep understanding of early
                        childhood development, creating a space where children feel safe, inspired, and truly at home.
                        The infrastructure is spacious and thoughtfully planned, allowing young learners the freedom
                        to explore, move, and grow with confidence. Bright, colorful classrooms filled with natural
                        light create a welcoming atmosphere that nurtures curiosity and imagination.
                    </p>
                    <p>
                        Each learning environment is carefully arranged with child-friendly furniture, interactive
                        learning zones, and age-appropriate resources that encourage independent discovery and
                        collaborative play. Our smart classrooms integrate modern educational technology with
                        hands-on learning experiences, ensuring that children engage with concepts in meaningful
                        and joyful ways. The environment balances structure and freedom, supporting cognitive
                        development while fostering creativity, emotional well-being, and social interaction.
                    </p>
                    <p>
                        Safety and care remain at the heart of our infrastructure. Soft play areas, secure spaces,
                        and thoughtfully designed layouts provide a warm and protective setting where children feel
                        valued and respected. Every detail — from colorful walls to sensory-rich learning corners —
                        is created to nurture confidence, happiness, and a love for learning. More than just a
                        physical space, our play school is a caring ecosystem where children are encouraged to
                        explore, express themselves, and build strong foundations for lifelong learning.
                    </p>
                </div>
            </div>
        </section>
    );
}

function AdministratorSection() {
    return (
        <section className="section management-section">
            <div className="container">
                <SectionHeading
                    eyebrow="Smart Start Play School"
                    title="From the Administrator"
                    align="center"
                />

                <div className="management-list">
                    <div className="management-card">
                        <div className="management-photo-wrap">
                            <img
                                src={asset('images/Administrator.jpg')}
                                alt="Mrs. P. VIDHYALAKSHMI"
                                className="management-photo"
                            />
                        </div>

                        <div className="management-info">
                            <h3 className="management-name">Mrs. P. VIDHYALAKSHMI</h3>
                            <p className="management-role">Administrator</p>
                            <p className="management-role">B.A., LL.M, PGDHRM, M.A (CC.E), M.Sc. Psychology (Specialization in Child Psychology)</p>
                            <div className="management-bio">
                                <p>Childhood is not just a phase of growing; it is a magical season of becoming. Every smile, every question, every tiny step forward carries within it the promise of a brighter tomorrow. As a play school Administrator, I feel deeply blessed to witness these precious beginnings — where curiosity blossoms, confidence takes root and innocence paints the world with wonder.</p>
                                <p>Our Smart Start Play School is more than a place of learning; it is a nurturing space where children feel safe to explore, express, and evolve. We believe that early childhood is the foundation upon which lifelong learning and emotional resilience are built. Through play, discovery, and meaningful relationships, we gently guide each child to develop not only academically but socially, emotionally, and creatively.</p>
                                <p>Each day, I watch children transform simple moments into extraordinary experiences — turning imagination into stories, friendships into lifelong lessons, and challenges into opportunities for growth. Their laughter reminds us that learning is joyful, and their questions inspire us to keep nurturing curiosity with patience and love.</p>
                                <p>We strongly believe that education is a partnership between school and family. When parents, teachers, and caregivers walk together with shared values and trust, children flourish in remarkable ways. Together, we create an environment where every child feels seen, heard, and celebrated for who they are.</p>
                                <p>As we continue this beautiful journey, our commitment remains unwavering — to provide a holistic, child-centered environment that respects individuality, encourages exploration, and builds strong emotional foundations. Because in every little hand we hold today lies the future we shape tomorrow.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function AboutUsPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="top" className="site-shell">
            <Navbar
                scrolled={scrolled}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                onEnquire={() => { }}
            />
            <main style={{ paddingBottom: '64px' }}>
                <WhySection />
                <InfrastructureSection />
                <AdministratorSection />
            </main>
            <Footer />
        </div>
    );
}
