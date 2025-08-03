import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HomePageActions } from "@/components/HomepageActions";
import { ItemsList } from "@/components/ItemsList";
import { RegisterItemForm } from "@/components/RegisterItemForm";

import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col h-screen mx-auto p-8 max-w-4xl">
        <div className="flex-grow place-content-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-3xl font-bold">Gerenciamento de Itens</h1>
              <RegisterItemForm />
            </div>

            <div>
              <div className="flex items-center justify-between gap-3">
                <HomePageActions />
                <Link href="/board">
                  <Button className="flex items-center gap-2">
                    Ir para Matriz <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <ItemsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
