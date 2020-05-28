function projectViewer() {
  const linkClassName = "project-selection-link";
  const projectClassName = "project-container";
  const toggleClassName = "active";

  let links = document.getElementsByClassName(linkClassName);
  let projects = document.getElementsByClassName(projectClassName);

  // Index of the currently selected project.
  let current = 0;
  projects[current].classList.add(toggleClassName);

  addLinkListeners();

  // Add listener to each project link to focus whichever project was
  // selected.
  function addLinkListeners() {
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function() {
	return function(event) {
	  let original = current; // Save before losing current project.
	  current = i;  // Use closure variable.

	  // Switch focus between the projects.
	  selectProject(original, current);

	  // Prevent reloading the page when clicking the link.
	  event.preventDefault();
	}
      }());
    }
  }

  function selectProject(original, current) {
    projects[original].classList.remove(toggleClassName);
    projects[current].classList.add(toggleClassName);
  }

}

projectViewer();
