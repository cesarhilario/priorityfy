"use client";

import { Link } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function NoAssignedItemsCard() {
  return (
    <Card>
      <CardContent className="text-center py-12">
        <p className="text-muted-foreground">
          Nenhum item foi atribuído aos quadrantes ainda.
        </p>
        <Link href="/board">
          <Button className="mt-4">Ir para Matriz</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
