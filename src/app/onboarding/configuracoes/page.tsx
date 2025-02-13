// app/onboarding/configuracoes/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Settings, Users, Clock, DollarSign, Bell, Percent } from "lucide-react"
import Link from "next/link"

export default function OnboardingConfiguracoesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Progresso */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Etapa 2 de 4</span>
            <div className="flex items-center gap-2">
              <Progress value={50} className="w-32 h-2" />
              <span>50%</span>
            </div>
          </div>

          {/* Cabeçalho */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Settings className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Configurações Iniciais
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Configure os parâmetros básicos para o funcionamento do sistema
            </p>
          </div>

          {/* Configurações Financeiras */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Configurações Financeiras
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Meta de Faturamento Mensal</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input placeholder="0,00" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Meta de CMV (%)</Label>
                  <div className="relative">
                    <Percent className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input placeholder="0%" className="pl-10" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Regime Tributário</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o regime" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="simples">Simples Nacional</SelectItem>
                    <SelectItem value="presumido">Lucro Presumido</SelectItem>
                    <SelectItem value="real">Lucro Real</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Configurações Operacionais */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Configurações Operacionais
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Dias de Funcionamento</Label>
                <div className="flex gap-2">
                  {["D", "S", "T", "Q", "Q", "S", "S"].map((day, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-primary focus:border-primary transition-colors text-sm font-medium"
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Número de Funcionários</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <Input type="number" placeholder="0" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Capacidade de Lugares</Label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notificações */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Configurações de Notificações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Alertas de Estoque Baixo",
                    description: "Receba notificações quando produtos estiverem acabando"
                  },
                  {
                    title: "Relatórios Semanais",
                    description: "Receba um resumo semanal do desempenho"
                  },
                  {
                    title: "Alertas de CMV",
                    description: "Seja notificado quando o CMV estiver fora da meta"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <Switch />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navegação */}
          <div className="flex justify-between pt-4">
            <Link href="/onboarding/restaurante">
              <Button variant="outline">Voltar</Button>
            </Link>
            <Link href="/onboarding/planejamento">
              <Button className="gap-2">
                Próxima etapa
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}