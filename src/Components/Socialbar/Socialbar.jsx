import React from 'react';
import './Socialbar.css';

export default function SocialBar({ isVisible }) {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/naturalmentevellya/',
      className: 'containerOne'
    },
    {
      name: 'Correo', 
      icon: 'fas fa-envelope',
      url: 'mailto:Vellyabylorena@gmail.com',
      className: 'containerTwo'
    },
    {
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/447801402674',
      className: 'containerFour'
    },
        {
      name: 'Tiktok',
      icon: 'fab fa-tiktok',
      url: 'https://www.tiktok.com/@naturalmentevellya',
      className: 'containerFive'
    }
  ];

  return (
    <div className={`social-bar ${isVisible ? 'visible' : ''}`}>
      <div className="card-social">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`socialContainer ${link.className}`}
            title={link.name}
          >
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
}