define(function() {
  return (opt = {}) => {
    let tableStyleStr = '';
    let cellStyleStr = '';
    let editor = opt.editor;
    let tableStyle = opt.tableStyle || {};
    let cellStyle = opt.cellStyle || {};
    let bm = editor.BlockManager;
    for (let prop in tableStyle){
      tableStyleStr += `${prop}: ${tableStyle[prop]}; `;
    }
    for (let prop in cellStyle){
      cellStyleStr += `${prop}: ${cellStyle[prop]}; `;
    }
    bm.getAll().reset();

    bm.add('maintable', {
      label: opt.emailHeaderLabel,
      category: opt.blockCategoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b1'},
      content: `<table class="main-table" data-gjs-copyable="false" data-gjs-droppable="false" data-gjs-draggable="true" data-gjs-custom-name="Main Table"  align="center" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
          <tbody class="target-tbody">
            <tr data-gjs-droppable="false" data-gjs-draggable="false">
              <td data-gjs-droppable="false" style="font-family: Roboto, sans-serif; font-weight: 300; font-size: 25px; background-color: #ffffff; color: #333333;" valign="bottom" align="center">
                <b>TEXT GOES HERE</b><br><br>
              </td>
            </tr>
            <tr data-gjs-droppable="false" data-gjs-draggable="false">
                <td data-gjs-droppable="false" data-gjs-removable="false" height="1.5px" style="background-color: #333333"></td>
            </tr>
            <tr class="target" data-gjs-droppable=".ed-table-cell" data-gjs-removable="false">
                <td class="target-cell" data-gjs-droppable="true"></td>
            </tr>
          </tbody></table>`,
    });

    bm.add('cta-button', {
      label: opt.ctaButtonLabel,
      category: opt.blockCategoryLabel,
      attributes: {class:'gjs-fonts gjs-f-button'},
      content: `<table align="center">
          <tbody>
            <tr class="ed-cta-button" data-gjs-custom-name="CTA Button Row" >
                <td>
                    <a data-gjs-droppable="false" data-gjs-draggable="false" href="" title="" target="_blank" style="font-size: 1.5em; font-weight:bold; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 3px; -webkit-border-radius: 3px; -moz-border-radius: 3px; background-color: #5d8200; border-top: 16px solid #5d8200; border-bottom: 16px solid #5d8200; border-right: 22px solid #5d8200; border-left: 22px solid #5d8200; display: inline-block; ">
                        TEXT GOES HERE
                    </a>
                </td data-gjs-droppable="false" data-gjs-draggable="false">
            </tr>
          </tbody>
        </table>`
    });


    bm.add('paragraph', {
        category : 'Custom blocks',
        label: 'Paragraph',
        attributes: {class:'gjs-fonts gjs-f-text'},
        content: {
            type: 'text',
            content: '<p>Insert your text here<p>',
            style: { margin : '10px' },
            activeOnRender: 1
        },
        // content: '<p style="margin-bottom:12px">Add your text</p>'
    });

    bm.add('paragraph-cell', {
      category : 'Custom blocks',
      label: 'Paragraph cell',
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: '<td><p style="font-family: Roboto, sans-serif; font-weight: 300; font-size:18px; background-color: #ffffff; color: #333333;">'+
          'Add your text</p></td>'
    });

    bm.add('image-with-link', {
      label: opt.imageWithLinkLabel,
      category: opt.blockCategoryLabel,
      attributes: {class:'gjs-fonts gjs-f-image'},
      content: `<tr class="ed-img-with-link" data-gjs-droppable="false" data-gjs-draggable=".target-table" data-gjs-name="Row with Image Link" align="center">
                    <td>
                        <a href="">
                            <img src="" alt="review_header" width="600" height="300">
                        </a>
                    </td>
                </tr>`,
    });

    bm.add('two-col-image-row', {
      label: opt.twoImageRowLabel,
      category: opt.blockCategoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b2'},
      content: `
        <table border="0" halign="centre" cellpadding="0" cellspacing="0" width="100%" style="${tableStyleStr} text-align:center;font-family: 'Roboto',sans-serif; line-height:20px; font-weight:300;">
          <tbody>
            <tr>
              <td vertical-align="middle" style="color:#005b94" width="290">
               <a href="" title=""><img src="" alt="" width="250px" height="250px" align="center"></a>
              </td>
              <td vertical-align="middle" style="color:#005b94" width="290">
               <a href=""><img src="" alt="" width="250px" height="250px" align="center"></a>
              </td>
            </tr>
          </tbody>
        </table>`,
    });



    bm.add('three-col-image-row', {
      label: opt.threeImageRowLabel,
      category: opt.blockCategoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b3'},
      content: `<table style="text-align:center" border="0" halign="centre" cellpadding="0" cellspacing="0" width="100%" style="font-family: \'Roboto\',sans-serif; line-height:20px; font-weight:300;">
                 <tbody>
                   <tr>
                     <td vertical-align="middle" style="color:#005b94" width="190">
                      <a href=""><img src="" alt="" width="160px" height="160px" align="center"></a>
                     </td>
                     <td vertical-align="middle" style="color:#005b94" width="190">
                      <a href=""><img src="" alt="" width="160px" height="160px" align="center"></a>
                     </td>
                     <td vertical-align="middle" style="color:#005b94" width="190">
                      <a href=""><img src="" alt="" width="160px" height="160px" align="center"></a>
                     </td>
                   </tr>
                 </tbody>
               </table>`,
    });

    bm.add('sect100', {
      label: opt.sect100BlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b1'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr}"></td>
        </tr>
        </table>`,
    });
    bm.add('sect50', {
      label: opt.sect50BlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b2'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 50%"></td>
          <td style="${cellStyleStr} width: 50%"></td>
        </tr>
        </table>`,
    });
    bm.add('sect30', {
      label: opt.sect30BlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-b3'},
      content: `<table style="${tableStyleStr}">
        <tr>
          <td style="${cellStyleStr} width: 33.3333%"></td>
          <td style="${cellStyleStr} width: 33.3333%"></td>
          <td style="${cellStyleStr} width: 33.3333%"></td>
        </tr>
        </table>`,
    });
    // bm.add('sect37', {
    //   label: opt.sect37BlkLabel,
    //   category: opt.categoryLabel,
    //   attributes: {class:'gjs-fonts gjs-f-b37'},
    //   content: `<table style="${tableStyleStr}">
    //     <tr>
    //       <td style="${cellStyleStr} width:30%"></td>
    //       <td style="${cellStyleStr} width:70%"></td>
    //     </tr>
    //     </table>`,
    // });
    bm.add('button', {
      label: opt.buttonBlkLabel,
      category: opt.categoryLabel,
      content: '<a class="button">Button</a>',
      attributes: {class:'gjs-fonts gjs-f-button'}
    });
    bm.add('divider', {
      label: opt.dividerBlkLabel,
      category: opt.categoryLabel,
      content: `<table style="width: 100%; margin-top: 10px; margin-bottom: 10px;">
        <tr>
          <td class="divider"></td>
        </tr>
      </table>
      <style>
      .divider {
        background-color: rgba(0, 0, 0, 0.1);
        height: 1px;
      }
      </style>`,
      attributes: {class:'gjs-fonts gjs-f-divider'}
    });
    bm.add('text', {
      label: opt.textBlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-text'},
      content: {
       type: 'text',
       content: 'Insert your text here',
       style: { padding: '10px' },
       activeOnRender: 1
      },
    });
    // bm.add('text-sect', {
    //   label: opt.textSectionBlkLabel,
    //   category: opt.categoryLabel,
    //   content: '<h1 class="heading">Insert title here</h1><p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>',
    //   attributes: {class:'gjs-fonts gjs-f-h1p'}
    // });
    bm.add('image', {
      label: opt.imageBlkLabel,
      category: opt.categoryLabel,
      attributes: {class:'gjs-fonts gjs-f-image'},
      content: {
        type:'image',
        style: {color:'black'},
        activeOnRender: 1
      },
    });
    // bm.add('quote', {
    //   label: opt.quoteBlkLabel,
    //   category: opt.categoryLabel,
    //   content: '<blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit</blockquote>',
    //   attributes: {class:'fa fa-quote-right'}
    // });
    // bm.add('link', {
    //   label: opt.linkBlkLabel,
    //   category: opt.categoryLabel,
    //   attributes: {class:'fa fa-link'},
    //   content: {
    //     type: 'link',
    //     content: 'Link',
    //     style: {color:'#3b97e3'}
    //   },
    // });
    // bm.add('link-block', {
    //   label: opt.linkBlockBlkLabel,
    //   category: opt.categoryLabel,
    //   attributes: {class:'fa fa-link'},
    //   content: {
    //     type: 'link',
    //     editable: false,
    //     droppable: true,
    //     style: {
    //       display: 'inline-block',
    //       padding: '5px',
    //       'min-height': '50px',
    //       'min-width': '50px'
    //     }
    //   },
    // });
    // let gridItem =
    //   `<table class="grid-item-card">
    //     <tr>
    //       <td class="grid-item-card-cell">
    //         <img class="grid-item-image" src="http://placehold.it/250x150/78c5d6/fff/" alt="Image"/>
    //         <table class="grid-item-card-body">
    //           <tr>
    //             <td class="grid-item-card-content">
    //               <h1 class="card-title">Title here</h1>
    //               <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    //             </td>
    //           </tr>
    //         </table>
    //       </td>
    //     </tr>
    //   </table>`;
    // bm.add('grid-items', {
    //   label: opt.gridItemsBlkLabel,
    //   category: opt.categoryLabel,
    //   content: `<table class="grid-item-row">
    //     <tr>
    //       <td class="grid-item-cell2-l">${gridItem}</td>
    //       <td class="grid-item-cell2-r">${gridItem}</td>
    //     </tr>
    //   </table>`,
    //   attributes: {class:'fa fa-th'}
    // });
    // let listItem =
    //   `<table class="list-item">
    //     <tr>
    //       <td class="list-item-cell">
    //         <table class="list-item-content">
    //           <tr class="list-item-row">
    //             <td class="list-cell-left">
    //               <img class="list-item-image" src="http://placehold.it/150x150/78c5d6/fff/" alt="Image"/>
    //             </td>
    //             <td class="list-cell-right">
    //               <h1 class="card-title">Title here</h1>
    //               <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
    //             </td>
    //           </tr>
    //         </table>
    //       </td>
    //     </tr>
    //   </table>`;
    // bm.add('list-items', {
    //   label: opt.listItemsBlkLabel,
    //   category: opt.categoryLabel,
    //   content: listItem + listItem,
    //   attributes: {class:'fa fa-th-list'}
    // });
  };
})
