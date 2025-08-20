// Modal for Portfolio Details
const projectDetails = {
  project1: `
    <h3>Mobile Banking App</h3>
    <p>
      Led the design of a secure, user-friendly mobile banking app for Gen-Z users. 
      Focused on onboarding simplicity, clear navigation, and delightful micro-interactions. 
      Integrated AI-driven budgeting advice and biometric authentication.
    </p>
  `,
  project2: `
    <h3>Healthcare Dashboard</h3>
    <p>
      Designed a clinician-facing dashboard for real-time patient health tracking. 
      Emphasized actionable data, accessibility, and customizable widgets. 
      Used rapid prototyping and user testing to iterate efficiently.
    </p>
  `,
  project3: `
    <h3>E-commerce Redesign</h3>
    <p>
      Overhauled the UX/UI of an e-commerce platform. 
      Improved navigation, checkout flow, and mobile responsiveness. 
      Added AI-powered product recommendations for a personalized shopping experience.
    </p>
  `
};

document.querySelectorAll('.learn-more').forEach(btn => {
  btn.addEventListener('click', e => {
    const key = btn.getAttribute('data-detail');
    document.getElementById('modal-body').innerHTML = projectDetails[key];
    document.getElementById('project-modal').style.display = 'flex';
  });
});
document.getElementById('close-modal').onclick = function() {
  document.getElementById('project-modal').style.display = 'none';
};
window.onclick = function(event) {
  const modal = document.getElementById('project-modal');
  if (event.target === modal) modal.style.display = 'none';
};

// Simple AI Chatbot Demo (no backend, demo only)
const aiMessages = document.getElementById('ai-messages');
const aiForm = document.getElementById('ai-form');
const aiInput = document.getElementById('ai-input');
const aiDemoBtn = document.getElementById('ai-demo-btn');

const aiReplies = [
  "Great question! In product design, user research is key to understanding what features matter most.",
  "I recommend starting every project with clear user personas and journey mapping.",
  "Accessibility means designing for everyone – use high color contrast and test with screen readers.",
  "AI can help by automating user feedback analysis and generating wireframes.",
  "My favorite design tool is Figma for its collaboration features.",
  "To improve usability, always test your designs with real users, even if it's just a quick prototype.",
  "Beautiful UI is important, but never at the expense of usability."
];

function addAIMessage(text, sender='bot') {
  const div = document.createElement('div');
  div.className = 'ai-msg ' + (sender === 'user' ? 'ai-msg-user' : 'ai-msg-bot');
  div.innerText = text;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
}

aiForm.addEventListener('submit', function(e){
  e.preventDefault();
  const question = aiInput.value.trim();
  if(!question) return;
  addAIMessage(question, 'user');
  aiInput.value = '';
  setTimeout(() => {
    const reply = aiReplies[Math.floor(Math.random() * aiReplies.length)];
    addAIMessage(reply, 'bot');
  }, 800);
});

aiDemoBtn.addEventListener('click', function() {
  document.getElementById('ai-demo').scrollIntoView({ behavior: 'smooth' });
  aiInput.focus();
});

// AI Curated Insight (demo)
const insights = [
  "The best product designs combine accessibility with delight. Ask me how to make your products accessible!",
  "Micro-interactions elevate user experience. Don’t underestimate the power of subtle animations.",
  "Design systems keep your products scalable and consistent. Start small, expand as you grow.",
  "User testing is your best friend – don’t skip it, even for MVPs.",
  "Personalization, powered by AI, is the future of digital product design."
];
const insightText = document.getElementById('insight-text');
document.getElementById('refresh-insight').onclick = function() {
  let newInsight;
  do {
    newInsight = insights[Math.floor(Math.random() * insights.length)];
  } while (insightText.innerText === newInsight);
  insightText.innerText = newInsight;
};
