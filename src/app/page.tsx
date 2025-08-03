import { Container } from "@/components/Container";
import { HomePageActions } from "@/components/HomepageActions";
import { ItemsList } from "@/components/ItemsList";
import { RegisterItemForm } from "@/components/RegisterItemForm";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col h-screen mx-auto p-8">
        <div className="flex-grow place-content-center">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 ">
              <div className="flex-grow">
                <h1 className="text-2xl md:text-3xl font-bold ">
                  Gerenciamento de Itens
                </h1>
              </div>
              <HomePageActions />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <RegisterItemForm />
              <ItemsList />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
