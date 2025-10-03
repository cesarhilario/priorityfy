"use client";

import {
  ArrowRight,
  BarChartIcon as ChartNoAxesCombined,
  Clock,
  Grid2X2,
  Heart,
  ListChecks,
  ShieldCheck,
  Trophy,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Blur } from "@/components/Blur";
import { ThemeToggle } from "@/components/providers/ThemeProvider/components/ThemeToggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Blur style={{ filter: "blur(70px)" }} />
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
        <div className="container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/priorityfy-logo-light.png"
              width={24}
              height={24}
              alt="Priorityfy Logo"
              className="inline-block rounded-full"
            />
            <span className="text-lg font-bold tracking-tight">Priorityfy</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Recursos
            </a>
            <a
              href="#como-funciona"
              className="hover:text-foreground transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#ranking"
              className="hover:text-foreground transition-colors"
            >
              Ranking
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link href="/login">
              <Button className="inline-flex items-center gap-2 cursor-pointer">
                Entrar no App <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-10%,_rgba(24,24,27,0.06),_transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-10%,_rgba(244,244,245,0.06),_transparent)]" />
          <div className="container mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div />
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                  Organize prioridades com a Matriz de Eisenhower
                  <Badge variant="secondary" className="ml-1">
                    Beta
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                  Priorize com clareza. Execute com foco.
                </h1>
                <p className="mt-4 text-lg dark:text-zinc-50 md:text-muted-foreground">
                  Cadastre tarefas, arraste para a matriz de Eisenhower e gere
                  um ranking final que respeita a urgência, a importância e seu
                  contexto. Visual, rápido e eficaz.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link href="/login">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto cursor-pointer"
                    >
                      Começar Agora
                    </Button>
                  </Link>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="rounded-lg border p-4">
                    <div className="text-2xl font-bold">2x</div>
                    <div className="text-xs text-muted-foreground">
                      Mais clareza
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-2xl font-bold">-35%</div>
                    <div className="text-xs text-muted-foreground">
                      Tempo perdido
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="text-2xl font-bold">+50%</div>
                    <div className="text-xs text-muted-foreground">
                      Execução
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-16 md:py-20">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">
                Tudo o que você precisa para priorizar
              </h2>
              <p className="text-muted-foreground mt-2">
                Uma experiência moderna, com tema Zinc e foco em usabilidade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Grid2X2 className="w-5 h-5 text-red-500" /> Matriz de
                    Eisenhower
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Arraste itens para os quadrantes Urgente/Importante. A matriz
                  traz clareza imediata do que fazer agora, planejar, delegar ou
                  eliminar.
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <ChartNoAxesCombined className="w-5 h-5 text-emerald-500" />{" "}
                    Ranking Inteligente
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  O ranking final respeita faixas por quadrante para garantir
                  que a matriz sempre domine a decisão. Desempates são
                  resolvidos de forma interativa.
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-zinc-500" /> Estado
                    Persistente
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Seus itens e preferências ficam salvos localmente com alta
                  confiabilidade. Continue de onde parou, sempre.
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-pink-500" /> Modo Desejo
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Dê mais peso ao que você quer fazer. Dentro do quadrante,
                  desejo pode dominar com pesos calibrados.
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-500" /> Modo Tempo
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Priorize tarefas mais rápidas. O tempo pode dominar a
                  ordenação dentro do quadrante de forma clara.
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <ListChecks className="w-5 h-5 text-blue-500" /> Métricas
                    Simples
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Defina duração e nível de desejo (1-5) com inputs práticos e
                  acompanhe o impacto direto no score.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight">
                Como funciona
              </h2>
              <p className="text-muted-foreground mt-2">
                Quatro passos para sair do caos e chegar à execução.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Cadastre itens",
                  desc: "Crie tarefas com nome e descrição claros.",
                },
                {
                  step: "2",
                  title: "Arraste para a matriz",
                  desc: "Solte cada item no quadrante correto.",
                },
                {
                  step: "3",
                  title: "Defina métricas",
                  desc: "Informe duração e desejo.",
                },
                {
                  step: "4",
                  title: "Gere o ranking",
                  desc: "Desempate interativo e score final.",
                },
              ].map((s) => (
                <Card key={s.step} className="border-2">
                  <CardHeader className="pb-2">
                    <Badge variant="outline" className="text-xs">
                      Passo {s.step}
                    </Badge>
                    <CardTitle className="mt-2">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    {s.desc}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ranking */}
        <section id="ranking" className="py-16 md:py-20">
          <div className="container mx-auto max-w-7xl px-6">
            <div className="flex justify-center items-center max-w-2xl mx-auto mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight flex items-center gap-3">
                  <Trophy className="w-7 h-7 text-amber-500" />
                  Ranking final que respeita a matriz
                </h2>
                <p className="text-muted-foreground mt-3">
                  Usamos faixas de pontuação por quadrante para garantir que
                  itens de P1 sempre fiquem acima de P2, e assim por diante.
                  Dentro da faixa, você escolhe: Desejo ou Tempo pode dominar.
                </p>

                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Q1:
                    1000–1199
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />{" "}
                    Q2: 800–999
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />{" "}
                    Q3: 600–799
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />{" "}
                    Q4: excluído do ranking
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto max-w-4xl px-6">
            <Card className="border-2">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold">
                  Pronto para priorizar de verdade?
                </h3>
                <p className="text-muted-foreground mt-2">
                  Leve sua rotina para outro nível com um fluxo simples e
                  objetivo.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/login">
                    <Button size="lg">Começar Agora</Button>
                  </Link>
                  <Link href="/#features">
                    <Button size="lg" variant="outline">
                      Ver Recursos
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={"/priorityfy-logo-light.png"}
                width={24}
                height={24}
                alt="Priorityfy Logo"
                className="inline-block rounded-full"
              />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Priorityfy by Jump Source
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a
                href="#features"
                className="hover:text-foreground transition-colors"
              >
                Recursos
              </a>
              <a
                href="#como-funciona"
                className="hover:text-foreground transition-colors"
              >
                Como funciona
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
