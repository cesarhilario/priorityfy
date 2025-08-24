import { Board } from "@/components/Board";
import { BoardPageHeader } from "@/components/BoardPageHeader";
import { Container } from "@/components/Container";

export default function BoardPage() {
  return (
    <Container>
      <div className="mx-auto">
        <BoardPageHeader />

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
    </Container>
  );
}
