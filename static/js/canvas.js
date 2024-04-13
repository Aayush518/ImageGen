// Initialize the canvas
const canvas = new fabric.Canvas('map-canvas', {
    width: 800,
    height: 600,
    backgroundColor: '#f0f0f0'
  });
  
  // Add event listener for "Add Rectangle" button
  document.getElementById('add-rect').addEventListener('click', () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      width: 50,
      height: 50,
      fill: 'transparent',
      stroke: '#6b7280',
      strokeWidth: 2
    });
    canvas.add(rect);
  });
  
  // Add event listener for "Clear Canvas" button
  document.getElementById('clear-canvas').addEventListener('click', () => {
    canvas.clear();
  });
  
  // Add event listener for drawing on the canvas
  canvas.on('mouse:down', (e) => {
    if (e.target) return;
    const pointer = canvas.getPointer(e.e);
    const rect = new fabric.Rect({
      left: pointer.x,
      top: pointer.y,
      width: 50,
      height: 50,
      fill: 'transparent',
      stroke: '#6b7280',
      strokeWidth: 2
    });
    canvas.add(rect);
  });
  
  canvas.on('object:modified', (e) => {
    console.log('Object modified:', e.target);
  });
  
  canvas.on('object:moving', (e) => {
    console.log('Object moving:', e.target);
  });
  
  canvas.on('object:scaling', (e) => {
    console.log('Object scaling:', e.target);
  });