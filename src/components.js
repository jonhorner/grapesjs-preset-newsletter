define(function() {
  return (opt = {}) => {
  	let editor = opt.editor;
    let cpnm = editor.DomComponents;

    // cpnm.getComponents().remove('image');
    let imgcomp = cpnm.getComponent('image');
    console.log(imgcomp.getConfig);
    console.log(cpnm);
    console.log(cpnm.getComponent('image'));
    // console.log(cpnm.getConfig());
  }
});