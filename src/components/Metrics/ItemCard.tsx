"use client";

import { Clock, Heart } from "lucide-react";
import type { Item, PriorityMode } from "@/store/useItemsStore";
import type { Metrics } from "@/types/Metrics";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type ItemCardProps = {
  item: Item;
  metrics: Metrics;
  handleDurationChange: (itemId: string, value: string, unit: string) => void;
  handleDesireChange: (itemId: string, value: string) => void;
  getUnitValue: (duration: number, unit: string) => number | "";
  priorityMode: PriorityMode;
};

export function ItemCard({
  item,
  metrics,
  handleDurationChange,
  handleDesireChange,
  getUnitValue,
  priorityMode,
}: ItemCardProps) {
  return (
    <Card key={item.id}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{item.name}</span>
          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
            Quadrante {item.quadrant}
          </span>
        </CardTitle>
        {item.description && (
          <p className="text-muted-foreground">{item.description}</p>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor={`duration-${item.id}`}
              className="text-sm font-medium mb-2 flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Duração
              {priorityMode === "time" && (
                <Badge variant="secondary" className="text-xs">
                  DOMINANTE
                </Badge>
              )}
            </label>
            <div className="flex gap-2">
              <Input
                id={`duration-${item.id}`}
                type="number"
                placeholder="Valor"
                value={
                  getUnitValue(
                    item.durationInMinutes,
                    metrics[item.id]?.unit || "minutes"
                  ) || ""
                }
                onChange={(e) =>
                  handleDurationChange(
                    item.id,
                    e.target.value,
                    metrics[item.id]?.unit || "minutes"
                  )
                }
                className="flex-1"
                min="0"
                step="any"
              />
              <Select
                value={metrics[item.id]?.unit || "minutes"}
                onValueChange={(value) =>
                  handleDurationChange(
                    item.id,
                    getUnitValue(item.durationInMinutes, value).toString(),
                    value
                  )
                }
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="minutes">Minutos</SelectItem>
                  <SelectItem value="hours">Horas</SelectItem>
                  <SelectItem value="days">Dias</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label
              htmlFor={`desire-${item.id}`}
              className="text-sm font-medium mb-2 flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Desejo (1-5)
              {priorityMode === "desire" && (
                <Badge variant="secondary" className="text-xs">
                  DOMINANTE
                </Badge>
              )}
            </label>
            <Input
              id={`desire-${item.id}`}
              type="number"
              min="1"
              max="5"
              value={
                metrics[item.id]?.desire === 0
                  ? ""
                  : metrics[item.id]?.desire || item.desire || ""
              }
              onChange={(e) => handleDesireChange(item.id, e.target.value)}
              placeholder="1-5"
              step="1"
            />
          </div>
        </div>

        <div className="mt-4 p-3 bg-muted/50 rounded-lg">
          <h4 className="font-medium mb-2">Métricas Atuais:</h4>
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Matriz:</span>
              <span className="ml-2 font-medium">{item.quadrant}/4</span>
            </div>
            <div>
              <span className="text-muted-foreground">Desejo:</span>
              <span className="ml-2 font-medium">{item.desire}/5</span>
            </div>
            <div>
              <span className="text-muted-foreground">Duração:</span>
              <span className="ml-2 font-medium">
                {item.durationInMinutes} min
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Score:</span>
              <span className="ml-2 font-medium text-primary">
                {item.score.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
