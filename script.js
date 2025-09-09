window.onload = function() {
    // Lyssna efter händelser
    const members = document.querySelectorAll('.team-member');
    members.forEach(member => {
        member.addEventListener('mouseover', () => effectOn(member));
        member.addEventListener('mouseout', () => effectOff(member));
    });
};

function updateTitle() {
    // Find the form that triggered the event
    const form = event.target.form || event.target.closest('form');
    // Find the closest .team-member container
    const teamMember = form.closest('.team-member');
    // Find the .team-title element inside this team member
    const titleElem = teamMember.querySelector('.team-title');
    // Get the new title from the input
    const newTitle = form.newTitle.value;
    // Update the title text
    titleElem.textContent = newTitle;
    // Optionally, save to localStorage using a unique key (e.g., by member name)
    const memberName = teamMember.querySelector('.team-name').textContent.trim();
    localStorage.setItem('team-title-' + memberName, newTitle);
}
function effectOn(element){
    // Lägg till effektklass
    element.classList.add('hovering');
}

function effectOff(element){
    // Ta bort effektklass
    element.classList.remove('hovering');
}