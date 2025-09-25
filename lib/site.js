// lib/site.js


export const EXPERIENCE_YEARS = "2+ yrs";


export const SITE_URL = "https://portfolio-2025-pro.vercel.app";

export const SITE = {
name: "Inemesit Richard David", 
email: "inemesitdavid90@gmail.com", 
phone: "+233595633424", 
phoneLink: "tel:+233595633424", 

whatsapp: "+233595633424", 
whatsappDigits: "233595633424", 
whatsappLink: "https://wa.me/233595633424", 

location: "Accra, Ghana", 

cvUrl: "/Inemesit-David-CV.pdf", 

  socials: {
    github: "https://github.com/ReechardDev",
    linkedin: "https://www.linkedin.com/in/inemesit-david-739676318/",
  },
};
 
export const whatsappLinkWithText = (text) =>
  `https://wa.me/${SITE.whatsappDigits}?text=${encodeURIComponent(text)}`;
