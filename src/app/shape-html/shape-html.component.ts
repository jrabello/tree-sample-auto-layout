import { Component, OnInit, ViewChild } from '@angular/core';
import { Diagram, NodeModel, NodeConstraints } from '@syncfusion/ej2-diagrams';

@Component({
  selector: 'app-shape-html',
  templateUrl: './shape-html.component.html',
  styleUrls: ['./shape-html.component.scss']
})
export class ShapeHtmlComponent implements OnInit {
  node: NodeModel
  @ViewChild('diagram')
  diagram: Diagram

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    const htmlString = '<div style="background:#6BA5D7;height:100%;width:100%;"><button type="button" style="width:100px"> Button</button></div>'
    const html = this.creatHtml2(htmlString)
    // const html = htmlString

    // A node is created and stored in nodes array.
    this.node = {
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
      },
      //sets the type of the shape as HTML
      shape: <NodeModel>{
        type: 'HTML',
        content: html
      }
    };

    // initialize diagram component
    // this.diagram = new Diagram({
    //   width: '100%',
    //   height: '600px',
    //   // Add node
    //   // nodes: [node]
    // });

    // render initialized diagram
    // this.diagram.appendTo('#element');
  }

  created(event) {
    console.log({event,node: this.node});
    debugger
    this.diagram.add(this.node)
  }

  addNode() {
    console.log({node: this.node});
    debugger
    this.diagram.add(this.node)
  }

  private creatHtml2(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    const container: ChildNode = template.content.childNodes[0];

    const div = document.createElement('div')
    div.appendChild(container)

    console.log({template, container, div,
      divInstance: div instanceof HTMLElement,
      containerInstance: container instanceof HTMLElement,
      templateInstance: template instanceof HTMLElement,
    });
    return div;
  }

  private createElementFromHTML(htmlString: string) {
    const div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    return div.firstChild;
  }
}
