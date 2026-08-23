const projects = [
  {
    number: '01', title: 'Phase Transition', subtitle: 'Three phases of odd robotic active matter', status: 'Preprint',
    description: 'Experimental robotic collectives reveal three distinct phases of motion. I build custom MASBots, conduct controlled trials, extract trajectories, and analyze how local nonreciprocal interactions produce emergent states.',
    tags: ['Active matter', 'MASBots', 'Trajectory analysis'], tone: 'sage', video: 'phase-transition.mp4', format: '16:9 · 5× speed', shape: 'landscapeVideo'
  },
  {
    number: '02', title: 'Phase Separation', subtitle: 'Organization from programmed interactions', status: 'Ongoing research',
    description: 'A study of how interaction rules generate spatial organization and phase-separated states in robotic collectives, combining physical experiments with quantitative tracking and data analysis.',
    tags: ['Collective dynamics', 'Experiments', 'Data analysis'], tone: 'sky', video: 'phase-separation.mp4', format: '1:1 · 5× speed', shape: 'squareVideo'
  },
  {
    number: '03', title: 'Gear Bots', subtitle: 'A modular platform for collective motion', status: 'Prototype',
    description: 'A hands-on robotic platform for exploring mechanical coupling and collective transport through iterative design, fabrication, calibration, and testing.',
    tags: ['Robotics', 'Prototyping', 'Collective transport'], tone: 'sand', video: 'gear-bots.mp4', format: 'near-square · 5× speed', shape: 'squareVideo'
  }
];

const stage = document.querySelector('.projectStage');
const videoFrame = document.querySelector('.videoFrame');
const video = document.querySelector('.projectVideo');

document.querySelectorAll('.projectRail button').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projects[Number(button.dataset.project)];
    document.querySelectorAll('.projectRail button').forEach((item) => item.setAttribute('aria-selected', String(item === button)));
    stage.className = `projectStage ${project.tone}`;
    videoFrame.className = `videoFrame ${project.shape}`;
    video.pause();
    video.querySelector('source').src = project.video;
    video.setAttribute('aria-label', `${project.title} experiment video`);
    video.load();
    video.play().catch(() => {});
    document.querySelector('.stageNumber').textContent = project.number;
    document.querySelector('.stageStatus').textContent = project.status;
    document.querySelector('.stageCopy h3').textContent = project.title;
    document.querySelector('.stageCopy h4').textContent = project.subtitle;
    document.querySelector('.stageDescription').textContent = project.description;
    document.querySelector('.videoFormat').textContent = project.format;
    document.querySelector('.stageTags').replaceChildren(...project.tags.map((tag) => Object.assign(document.createElement('li'), { textContent: tag })));
  });
});
