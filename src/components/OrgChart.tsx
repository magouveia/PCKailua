import React, { useState, useCallback, useMemo, useEffect } from 'react';
import ReactFlow, { Background, Controls, NodeMouseHandler, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import './OrgChart.css';
import { createNodesAndEdges } from './organigramaData';
import { ArrowLeft } from 'lucide-react';

interface OrgChartProps {
  onBack: () => void;
}

export default function OrgChart({ onBack }: OrgChartProps) {
  // Initial state: only show top level
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['direcao-executiva']));
  
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  // Update nodes and edges whenever expandedNodes changes
  useEffect(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = createNodesAndEdges(expandedNodes);
    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [expandedNodes, setNodes, setEdges]);

  const onNodeClick: NodeMouseHandler = useCallback((event, node) => {
    const rawId = node.data.rawId;
    if (!rawId) return;

    setExpandedNodes((prev) => {
      const next = new Set(prev);
      if (next.has(rawId)) {
        next.delete(rawId);
      } else {
        next.add(rawId);
      }
      return next;
    });
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', background: '#1a1a1a', position: 'relative' }}>
      {/* Navigation Header */}
      <div className="w-full p-4 z-10 flex items-center justify-between border-b border-brand-tan/20 bg-brand-dark/50 backdrop-blur-sm absolute top-0 left-0">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-brand-cream hover:text-brand-tan transition-colors font-bold uppercase tracking-widest text-sm"
        >
          <ArrowLeft size={20} /> Voltar
        </button>
        <h1 className="text-xl font-serif font-bold text-brand-cream">Organograma Interativo</h1>
        <div className="w-20"></div> {/* Spacer for symmetry */}
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        fitView
        minZoom={0.1}
        maxZoom={1.5}
        nodesDraggable={false} // Disable dragging to keep layout clean
      >
        <Background color="#333" gap={20} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
