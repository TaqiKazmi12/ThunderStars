document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtns = document.querySelectorAll('.dropdown');
    let openDropdown = null; // Track the currently open dropdown

    // Toggle dropdown content on click
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownContent = btn.querySelector('.dropdown-content');
            
            // Close the previously open dropdown
            if (openDropdown && openDropdown !== dropdownContent) {
                openDropdown.classList.remove('show');
            }
            
            // Toggle the current dropdown
            dropdownContent.classList.toggle('show');
            
            // Update the openDropdown tracker
            openDropdown = dropdownContent.classList.contains('show') ? dropdownContent : null;
        });
    });

    // Close dropdowns if clicking outside
    document.addEventListener('click', (e) => {
        const isClickInsideDropdown = e.target.closest('.dropdown') || e.target.closest('.dropdown-content');
        
        // Close dropdowns only if clicking outside of all dropdown elements
        if (!isClickInsideDropdown) {
            dropdownBtns.forEach(btn => {
                const dropdownContent = btn.querySelector('.dropdown-content');
                dropdownContent.classList.remove('show');
            });
            openDropdown = null; // Reset the openDropdown tracker
        }
    });
});
