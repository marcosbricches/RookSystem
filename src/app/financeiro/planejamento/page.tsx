import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function PlanejamentoOrcamentario() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Planejamento Orçamentário</h1>
        <Button>Salvar Planejamento</Button>
      </div>

      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertDescription>
          Preencha as despesas operacionais para obter uma análise financeira mais detalhada.
        </AlertDescription>
      </Alert>

      <form className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Básicas</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="estoqueInicial">Estoque Inicial (R$)</Label>
              <Input 
                id="estoqueInicial" 
                type="number" 
                placeholder="0,00"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="comprasPeriodo">Compras do Período (R$)</Label>
              <Input 
                id="comprasPeriodo" 
                type="number" 
                placeholder="0,00"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="estoqueFinal">Estoque Final (R$)</Label>
              <Input 
                id="estoqueFinal" 
                type="number" 
                placeholder="0,00"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="faturamentoTotal">Faturamento Total (R$)</Label>
              <Input 
                id="faturamentoTotal" 
                type="number" 
                placeholder="0,00"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ticketMedio">Ticket Médio (R$)</Label>
              <Input 
                id="ticketMedio" 
                type="number" 
                placeholder="0,00"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientesAtendidos">Número de Clientes Atendidos</Label>
              <Input 
                id="clientesAtendidos" 
                type="number" 
                placeholder="0"
                required
              />
            </div>
          </CardContent>
        </Card>

        <Accordion type="single" collapsible>
          <AccordionItem value="despesas">
            <AccordionTrigger>
              <h3 className="text-xl font-semibold">Despesas Operacionais</h3>
            </AccordionTrigger>
            <AccordionContent>
              <Card>
                <CardContent className="pt-6 grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="aluguel">Aluguel (R$)</Label>
                    <Input 
                      id="aluguel" 
                      type="number" 
                      placeholder="0,00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="folhaPagamento">Folha de Pagamento (R$)</Label>
                    <Input 
                      id="folhaPagamento" 
                      type="number" 
                      placeholder="0,00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gorjetas">Gorjetas (R$)</Label>
                    <Input 
                      id="gorjetas" 
                      type="number" 
                      placeholder="0,00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="marketing">Marketing (R$)</Label>
                    <Input 
                      id="marketing" 
                      type="number" 
                      placeholder="0,00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="impostos">Impostos Operacionais (R$)</Label>
                    <Input 
                      id="impostos" 
                      type="number" 
                      placeholder="0,00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="servicosPublicos">Serviços Públicos (R$)</Label>
                    <Input 
                      id="servicosPublicos" 
                      type="number" 
                      placeholder="0,00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="manutencao">Manutenção e Equipamentos (R$)</Label>
                    <Input 
                      id="manutencao" 
                      type="number" 
                      placeholder="0,00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="delivery">Delivery (R$)</Label>
                    <Input 
                      id="delivery" 
                      type="number" 
                      placeholder="0,00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="outrasVariaveis">Outras Variáveis (R$)</Label>
                    <Input 
                      id="outrasVariaveis" 
                      type="number" 
                      placeholder="0,00"
                    />
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancelar</Button>
          <Button>Salvar Planejamento</Button>
        </div>
      </form>
    </div>
  )
}