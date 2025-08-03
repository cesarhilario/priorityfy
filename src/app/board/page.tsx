import { Board } from "@/components/Board";
import { BoardPageActions } from "@/components/BoardPageActions";

export default function BoardPage() {
  return (
    <div className="min-h-screen bg-background ">
      <div className="mx-auto">
        <BoardPageActions />

        <div className="m-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            Matriz de Eisenhower
          </h1>
          <p className="text-muted-foreground">
            Organize suas tarefas por urgência e importância
          </p>
        </div>

        <Board />
      </div>
    </div>
  );
}
