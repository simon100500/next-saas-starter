"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Plus } from "lucide-react";

export default function ConstructionObjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Объекты строительства</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Добавить объект
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <div className="bg-gray-100 p-3 rounded-lg">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-medium">Жилой комплекс "Солнечный"</h3>
              <p className="text-sm text-gray-500">ул. Ленина, 123</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">
              Активный
            </span>
            <Button variant="ghost" size="sm">
              Подробнее
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
