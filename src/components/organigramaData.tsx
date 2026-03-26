import React from 'react';
import { Node, Edge, MarkerType } from 'reactflow';
import dagre from 'dagre';

// 1. Dados Agrupados (Para não repetir blocos e nomes)
export const rawOrgData = [
  { id: "topo-direcao", nome: "SARA (Dir. Geral) & CARLOS (Dir. Financeiro)", parent: null, departamento: "Direção" },
  { id: "direcao-corporativa", nome: "DIREÇÃO CORPORATIVA", parent: "topo-direcao", departamento: "Corporativo" },
  { id: "direcao-operacional", nome: "DIREÇÃO OPERACIONAL", parent: "topo-direcao", departamento: "Operacional" },
  
  // Exemplo de Agrupamento na Cozinha (Onde estava a confusão)
  { id: "joao-chefe-cozinha", nome: "JOÃO\nChefe de Cozinha", parent: "direcao-operacional", departamento: "Food" },
  { id: "subchefe-cozinha", nome: "Sub-Chefe de Cozinha", parent: "joao-chefe-cozinha", departamento: "Cozinha" },
  { id: "katia-cozinheira", nome: "KÁTIA\nCozinheira de 1ª", parent: "subchefe-cozinha", departamento: "Cozinha" },
  { id: "cozinheira-2", nome: "VIVIANA & TIA\nCozinheiras de 2ª", parent: "katia-cozinheira", departamento: "Cozinha" },
  { id: "cozinheira-3", nome: "SANDY & NAUSICA\nCozinheiras de 3ª", parent: "cozinheira-2", departamento: "Cozinha" },
  { id: "ajudantes-cozinha", nome: "VIVIANA & TIA\nAjudantes de Cozinha", parent: "cozinheira-3", departamento: "Cozinha" },

  // Manutenção
  { id: "ze-manutencao", nome: "ZÉ\nChefe de Manutenção", parent: "direcao-operacional", departamento: "Manutenção" },
  { id: "ajudante-manutencao", nome: "Ajudantes de Manutenção", parent: "ze-manutencao", departamento: "Manutenção" },
];

// 2. Cores do PDF
const getDeptColor = (dept: string) => {
  const colors: any = {
    'Direção': '#e87d3e',
    'Cozinha': '#c2410c',
    'Manutenção': '#22c55e',
    'Operacional': '#3b82f6'
  };
  return colors[dept] || '#64748b';
};

// 3. Layout com mais espaço (Evita sobreposição)
export const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  
  // Aumentei o nodesep para 300 e ranksep para 150
  dagreGraph.setGraph({ rankdir: 'TB', nodesep: 300, ranksep: 150 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: 220, height: 100 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  return {
    nodes: nodes.map((node) => {
      const { x, y } = dagreGraph.node(node.id);
      return { ...node, position: { x: x - 110, y: y - 50 } };
    }),
    edges
  };
};

// 4. Criação de Edges com Animação (Tracejados Vivos)
export const createNodesAndEdges = () => {
  const nodes: Node[] = rawOrgData.map(d => ({
    id: d.id,
    data: { label: d.nome },
    style: { background: getDeptColor(d.departamento), color: '#fff', borderRadius: '8px', padding: '10px', width: 220 },
    position: { x: 0, y: 0 }
  }));

  const edges: Edge[] = rawOrgData
    .filter(d => d.parent)
    .map(d => ({
      id: `e-${d.parent}-${d.id}`,
      source: d.parent!,
      target: d.id,
      animated: true, // Isto faz o tracejado "correr"
      style: { strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed }
    }));

  return getLayoutedElements(nodes, edges);
};
