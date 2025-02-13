// app/onboarding/planejamento/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileBarChart, DollarSign, TrendingUp, Wallet, ShoppingBag, Building2, Users } from "lucide-react"
import Link from "next/link"

export default function OnboardingPlanejamentoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Progresso */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Etapa 3 de 4</span>
            <div className="flex items-center gap-2">
              <Progress value={75} className="w-32 h-2" />
              <span>75%</span>
            </div>
          </div>

          {/* Cabeçalho */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <FileBarChart className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Planejamento Orçamentário
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Configure seu primeiro planejamento financeiro para começar com o pé direito
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Planejamento Inicial</CardTitle>
                <Select defaultValue="janeiro">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione o mês" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="janeiro">Janeiro 2025</SelectItem>
                    <SelectItem value="fevereiro">Fevereiro 2025</SelectItem>
                    <SelectItem value="marco">Março 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="receitas" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="receitas" className="gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Receitas
                  </TabsTrigger>
                  <TabsTrigger value="custos" className="gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Custos
                  </TabsTrigger>
                  <TabsTrigger value="despesas" className="gap-2">
                    <Wallet className="h-4 w-4" />
                    Despesas
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="receitas" className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Faturamento Previsto</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="0,00" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Ticket Médio Esperado</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="0,00" className="pl-10" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Número de Clientes/Dia</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                        <Input type="number" placeholder="0" className="pl-10" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="custos" className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Custo de Insumos</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="0,00" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Custo de Mão de Obra</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="0,00" className="pl-10" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>CMV Previsto (%)</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="despesas" className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Aluguel</Label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="0,00" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Energia/Água</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="0,00" className="pl-10" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Marketing</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="0,00" className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Outras Despesas</Label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                          <Input placeholder="0,00" className="pl-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Navegação */}
          <div className="flex justify-between pt-4">
            <Link href="/onboarding/configuracoes">
              <Button variant="outline">Voltar</Button>
            </Link>
            <Link href="/onboarding/relatorios">
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