import React from 'react';
import { Node, Edge } from 'reactflow';

export const initialNodes: Node[] = [
  // NÍVEL 1: O TOPO ABSOLUTO
  { 
    id: 'executiva', 
    data: { label: <div className="node-content"><strong>DIREÇÃO EXECUTIVA</strong></div> }, 
    position: { x: 450, y: 0 }, 
    style: { borderRadius: '15px', padding: '10px', width: 180, textAlign: 'center', background: '#f96', color: '#fff', fontWeight: 'bold' } 
  },

  // NÍVEL 2: OS DIRETORES (Pares, por baixo da Executiva)
  { 
    id: 'sara', 
    data: { label: <div className="node-content"><strong>DIRETORA GERAL</strong><span>SARA</span></div> }, 
    position: { x: 200, y: 120 }, 
    style: { borderRadius: '15px', padding: '10px', width: 180, textAlign: 'center', background: '#fff', color: '#333', border: '1px solid #ddd' } 
  },
  { 
    id: 'carlos', 
    data: { label: <div className="node-content"><strong>DIRETOR FINANCEIRO</strong><span>CARLOS</span></div> }, 
    position: { x: 700, y: 120 }, 
    style: { borderRadius: '15px', padding: '10px', width: 180, textAlign: 'center', background: '#fff', color: '#333', border: '1px solid #ddd' } 
  }
];

export const initialEdges: Edge[] = [
  // Ligações de hierarquia (quem manda em quem)
  { id: 'e1', source: 'executiva', target: 'sara', type: 'smoothstep' },
  { id: 'e2', source: 'executiva', target: 'carlos', type: 'smoothstep' }
];
