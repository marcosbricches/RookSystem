// app/planos/checkout/page.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { 
  AlertCircle,
  ArrowLeft, 
  CreditCard, 
  Building2, 
  QrCode, 
  Lock,
  Shield,
  CircleHelp,
  CheckCircle
} from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto py-10">
        {/* Header */}
        <div className="mb-8">
          <Link href="/planos" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para planos
          </Link>
          <h1 className="text-3xl font-bold">Finalizar assinatura</h1>
          <p className="text-muted-foreground mt-2">
            Escolha a forma de pagamento e comece a usar agora mesmo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna principal */}
          <div className="md:col-span-2 space-y-6">
            {/* Plano selecionado */}
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span>Plano selecionado</span>
                  <Link href="/planos">
                    <Button variant="ghost" size="sm">Trocar plano</Button>
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div>
                    <h3 className="font-semibold">Plano Avançado</h3>
                    <p className="text-sm text-muted-foreground">
                      Ideal para restaurantes em crescimento
                    </p>
                  </div>
                  <Badge className="ml-auto">Mais Popular</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Forma de pagamento */}
            <Card>
              <CardHeader>
                <CardTitle>Forma de pagamento</CardTitle>
                <CardDescription>
                  Escolha como deseja pagar sua assinatura
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup defaultValue="cartao" className="space-y-4">
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="cartao" id="cartao" />
                    <Label 
                      htmlFor="cartao" 
                      className="flex items-center gap-2 cursor-pointer flex-1"
                    >
                      <CreditCard className="h-4 w-4" />
                      <div className="flex-1">
                        <p className="font-medium">Cartão de crédito</p>
                        <p className="text-sm text-muted-foreground">
                          Visa, Mastercard, Elo e American Express
                        </p>
                      </div>
                      <Badge variant="secondary">Recomendado</Badge>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="boleto" id="boleto" />
                    <Label 
                      htmlFor="boleto" 
                      className="flex items-center gap-2 cursor-pointer flex-1"
                    >
                      <Building2 className="h-4 w-4" />
                      <div className="flex-1">
                        <p className="font-medium">Boleto bancário</p>
                        <p className="text-sm text-muted-foreground">
                          O acesso é liberado em até 3 dias úteis após o pagamento
                        </p>
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label 
                      htmlFor="pix" 
                      className="flex items-center gap-2 cursor-pointer flex-1"
                    >
                      <QrCode className="h-4 w-4" />
                      <div className="flex-1">
                        <p className="font-medium">PIX</p>
                        <p className="text-sm text-muted-foreground">
                          Acesso imediato após o pagamento
                        </p>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>

                <Separator />

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-number">Número do cartão</Label>
                    <Input 
                      id="card-number" 
                      placeholder="0000 0000 0000 0000"
                      className="font-mono"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Validade</Label>
                      <Input 
                        id="expiry" 
                        placeholder="MM/AA"
                        className="font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input 
                        id="cvv" 
                        placeholder="123"
                        className="font-mono"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome no cartão</Label>
                    <Input 
                      id="name" 
                      placeholder="Como está impresso no cartão" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF do titular</Label>
                    <Input 
                      id="cpf" 
                      placeholder="000.000.000-00"
                      className="font-mono"
                    />
                  </div>
                </div>

                <Alert>
                  <Lock className="h-4 w-4" />
                  <AlertTitle>Pagamento Seguro</AlertTitle>
                  <AlertDescription>
                    Seus dados estão protegidos com criptografia de ponta a ponta
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          {/* Resumo do pedido */}
          <div>
            <div className="sticky top-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resumo do pedido</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Plano Avançado</span>
                    <span className="font-medium">R$ 199,00</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Período</span>
                    <span>Mensal</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span className="text-lg">R$ 199,00</span>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>14 dias de teste grátis</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      <span>Cancele quando quiser</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Link href="/planos/tutorial">
                  <Button className="w-full" size="lg">
                    <Lock className="h-4 w-4 mr-2" />
                    Finalizar pagamento
                  </Button>
                  </Link>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Ambiente seguro</span>
                  </div>
                </CardFooter>
              </Card>

              {/* FAQ Rápido */}
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <CircleHelp className="h-5 w-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Quando serei cobrado?</p>
                    <p className="text-sm text-muted-foreground">
                      Após os 14 dias de teste, em caso de não cancelamento
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CircleHelp className="h-5 w-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-sm font-medium">Preciso fornecer cartão no teste?</p>
                    <p className="text-sm text-muted-foreground">
                      Sim, mas você não será cobrado durante o período de teste
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}