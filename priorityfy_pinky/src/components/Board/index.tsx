"use client";

import { EisenhowerQuadrants } from "./components/EisenhowerQuadrants";
import { UnassignedQuadrant } from "./components/UnassignedQuadrant";
import { useEisenhowerQuadrants } from "./hooks/useEisenhowerQuadrants";

export function Board() {
  const {
    unassignedItems,
    getItemsByQuadrant,
    handleDragStart,
    handleDragOver,
    handleDrop,
    items,
  } = useEisenhowerQuadrants();

  return (
    <section>
      <UnassignedQuadrant
        unassignedItems={unassignedItems}
        getItemsByQuadrant={getItemsByQuadrant}
        handleDragOver={handleDragOver}
        handleDragStart={handleDragStart}
        handleDrop={handleDrop}
        items={items}
      />

      <EisenhowerQuadrants
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
        getItemsByQuadrant={getItemsByQuadrant}
      />
    </section>
  );
}
