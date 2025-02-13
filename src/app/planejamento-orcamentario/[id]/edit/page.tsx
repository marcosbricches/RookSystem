// src/app/planejamento-orcamentario/[id]/edit/page.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  ArrowLeft,
  Save,
  DollarSign,
  Building2,
  Users,
  AlertCircle
} from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function EditPlanejamentoPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/planejamento-orcamentario/1">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Editar Planejamento</h1>
          <p className="text-muted-foreground mt-2">
            Janeiro 2025 - Edite os dados do planejamento orçamentário
          </p>
        </div>
      </div>

      <Tabs defaultValue="dados-principais" className="space-y-6">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="dados-principais">Dados Principais</TabsTrigger>
          <TabsTrigger value="despesas">Despesas Operacionais</TabsTrigger>
        </TabsList>

        <TabsContent value="dados-principais">
          <div className="grid gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <DollarSign className="h-5 w-5 text-muted-foreground" />
                  <h2 className="text-xl font-semibold">Dados Financeiros</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="estoque-inicial">Estoque Inicial</Label>
                    <Input 
                      id="estoque-inicial" 
                      placeholder="R$ 0,00"
                      type="number"
                      defaultValue="85000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="compras">Compras do Período</Label>
                    <Input 
                      id="compras" 
                      placeholder="R$ 0,00"
                      type="number"
                      defaultValue="125000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="estoque-final">Estoque Final</Label>
                    <Input 
                      id="estoque-final" 
                      placeholder="R$ 0,00"
                      type="number"
                      defaultValue="78500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="faturamento">Faturamento Total</Label>
                    <Input 
                      id="faturamento" 
                      placeholder="R$ 0,00"
                      type="number"
                      defaultValue="398500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="ticket">Ticket Médio</Label>
                    <Input 
                      id="ticket" 
                      placeholder="R$ 0,00"
                      type="number"
                      defaultValue="85"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="clientes">Número de Clientes</Label>
                    <Input 
                      id="clientes" 
                      placeholder="0"
                      type="number"
                      defaultValue="4688"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Atenção</AlertTitle>
              <AlertDescription>
                Para uma análise financeira mais precisa, mantenha as despesas operacionais atualizadas na próxima aba.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>

        <TabsContent value="despesas">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-xl font-semibold">Despesas Fixas</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <Label htmlFor="aluguel">Aluguel</Label>
                  <Input 
                    id="aluguel" 
                    placeholder="R$ 0,00"
                    type="number"
                    defaultValue="15000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="folha">Folha de Pagamento</Label>
                  <Input 
                    id="folha" 
                    placeholder="R$ 0,00"
                    type="number"
                    defaultValue="45000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="gorjetas">Gorjetas</Label>
                  <Input 
                    id="gorjetas" 
                    placeholder="R$ 0,00"
                    type="number"
                    defaultValue="12500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <Users className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-xl font-semibold">Despesas Variáveis</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="marketing">Marketing</Label>
                  <Input 
                    id="marketing" 
                    placeholder="R$ 0,00"
                    type="number"
                    defaultValue="8500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="impostos">Impostos Operacionais</Label>
                  <Input 
                    id="impostos" 
                    placeholder="R$ 0,00"
                    type="number"
                    defaultValue="25000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="servicos">Serviços Públicos</Label>
                  <Input 
                    id="servicos" 
                    placeholder="R$ 0,00"
                    type="number"
                    defaultValue="12000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="manutencao">Manutenção e Equipamentos</Label>
                  <Input 
                    id="manutencao" 
                    placeholder="R$ 0,00"
                    type="number"
                    defaultValue="5500"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="delivery">Delivery</Label>
                  <Input 
                    id="delivery" 
                    placeholder="R$ 0,00"
                    type="number"
                    defaultValue="15000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="outras">Outras Variáveis</Label>
                  <Input 
                    id="outras" 
                    placeholder="R$ 0,00"
                    type="number"
                    defaultValue="8000"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4 mt-8">
        <Link href="/planejamento-orcamentario/1">
          <Button variant="outline">Cancelar</Button>
        </Link>
        <Button className="flex items-center gap-2">
          <Save className="h-4 w-4" />
          Salvar Alterações
        </Button>
      </div>
    </div>
  )
}