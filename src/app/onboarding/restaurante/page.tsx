// app/onboarding/restaurante/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Building2, CheckCircle2, HelpCircle, Store, FileText } from "lucide-react"
import Link from "next/link"

export default function OnboardingRestaurantePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Progresso */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Etapa 1 de 4</span>
            <div className="flex items-center gap-2">
              <Progress value={25} className="w-32 h-2" />
              <span>25%</span>
            </div>
          </div>

          {/* Cabeçalho */}
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              Configure seu Restaurante
            </h1>
            <p className="text-gray-600 max-w-lg mx-auto">
              Vamos começar configurando as informações básicas do seu estabelecimento para personalizar sua experiência
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Informações do Estabelecimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Dados Principais */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome do Estabelecimento</Label>
                    <div className="relative">
                      <Store className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input id="name" placeholder="Digite o nome" className="pl-10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="type">Tipo de Estabelecimento</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="restaurante">Restaurante</SelectItem>
                        <SelectItem value="bar">Bar</SelectItem>
                        <SelectItem value="cafeteria">Cafeteria</SelectItem>
                        <SelectItem value="lanchonete">Lanchonete</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <button className="text-xs text-primary hover:underline flex items-center gap-1">
                      <HelpCircle className="h-3 w-3" />
                      Por que precisamos disso?
                    </button>
                  </div>
                  <Input id="cnpj" placeholder="00.000.000/0000-00" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição</Label>
                  <Input id="description" placeholder="Breve descrição do seu estabelecimento" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="opening">Horário de Abertura</Label>
                    <Input type="time" id="opening" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="closing">Horário de Fechamento</Label>
                    <Input type="time" id="closing" />
                  </div>
                </div>
              </div>

              {/* Endereço */}
              <div className="pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">Endereço</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cep">CEP</Label>
                      <Input id="cep" placeholder="00000-000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">Estado</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sp">São Paulo</SelectItem>
                          <SelectItem value="rj">Rio de Janeiro</SelectItem>
                          <SelectItem value="mg">Minas Gerais</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço Completo</Label>
                    <Input id="address" placeholder="Rua, número, complemento" />
                  </div>
                </div>
              </div>

              {/* Documentos */}
              <div className="pt-6 border-t">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <FileText className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-blue-900">Documentação</h4>
                    <p className="text-sm text-blue-700 mt-1">
                      Para agilizar seu processo, tenha em mãos: Alvará de funcionamento, Licença sanitária e documentos do responsável legal.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navegação */}
          <div className="flex justify-between pt-4">
            <Link href="/onboarding">
              <Button variant="outline">Voltar</Button>
            </Link>
            <Link href="/onboarding/configuracoes">
              <Button className="gap-2">
                Próxima etapa
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Modal de conclusão (exemplo) */}
          <Dialog defaultOpen={false}>
            <DialogContent>
              <DialogHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-green-100">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <DialogTitle className="text-center">
                  Etapa concluída!
                </DialogTitle>
                <DialogDescription className="text-center">
                  As informações do seu restaurante foram salvas. Vamos para as configurações iniciais?
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-center">
                <Link href="/onboarding/configuracoes">
                  <Button className="gap-2">
                    Continuar
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}