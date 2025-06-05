const logo = document.getElementById('logo');
const sidebar = document.querySelector('.sidebar');
if (logo) {
  logo.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    logo.classList.add('rotate');
    setTimeout(() => logo.classList.remove('rotate'), 300);
  });
}

// Conseil du jour aléatoire
const tips = [
  "Astuce : utilisez le mode sombre pour économiser la batterie.",
  "Pensez à vérifier les mises à jour dans le store.",
  "Glissez déposez vos apps préférées dans votre profil.",
  "Changez le thème dans vos préférences utilisateur."
];
const tipPlaceholder = document.getElementById('daily-tip');
if (tipPlaceholder) {
  const index = Math.floor(Math.random() * tips.length);
  tipPlaceholder.textContent = tips[index];
}
