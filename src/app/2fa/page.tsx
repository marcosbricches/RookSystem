// app/2fa/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Mail, ArrowLeft, Smartphone, Clock, RefreshCw } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function TwoFactorAuthPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
      <div className="max-w-md mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">
            Verificação em duas etapas
          </h1>
          <p className="mt-2 text-gray-600">
            Digite o código de verificação para continuar
          </p>
        </div>

        <Card className="border-0 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Verificar acesso</CardTitle>
            <CardDescription>
              Escolha como deseja receber o código de verificação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="email" className="space-y-6">
              <TabsList className="grid grid-cols-2">
                <TabsTrigger value="email" className="space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>E-mail</span>
                </TabsTrigger>
                <TabsTrigger value="sms" className="space-x-2">
                  <Smartphone className="h-4 w-4" />
                  <span>SMS</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-6">
                <div className="text-sm text-gray-600">
                  <p>Enviaremos um código para:</p>
                  <p className="font-medium">j****@email.com</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email-code">Código de verificação</Label>
                  <Input 
                    id="email-code"
                    placeholder="Digite o código de 6 dígitos"
                    className="text-center text-lg tracking-[0.5em] font-mono"
                    maxLength={6}
                  />
                </div>
              </TabsContent>

              <TabsContent value="sms" className="space-y-6">
                <div className="text-sm text-gray-600">
                  <p>Enviaremos um código para:</p>
                  <p className="font-medium">(11) *****-4321</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sms-code">Código de verificação</Label>
                  <Input 
                    id="sms-code"
                    placeholder="Digite o código de 6 dígitos"
                    className="text-center text-lg tracking-[0.5em] font-mono"
                    maxLength={6}
                  />
                </div>
              </TabsContent>

              {/* Botões de ação */}
              <div className="space-y-4 pt-2">
                <Button className="w-full h-11 text-base">
                  Verificar código
                </Button>

                <div className="flex items-center justify-between text-sm">
                  <button className="text-primary hover:underline flex items-center gap-1">
                    <RefreshCw className="h-4 w-4" />
                    Reenviar código
                  </button>
                  <div className="flex items-center text-gray-500 gap-1">
                    <Clock className="h-4 w-4" />
                    Expira em: 4:59
                  </div>
                </div>

                <Link href="/login">
                  <Button 
                    variant="outline" 
                    className="w-full h-11 text-base"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar para login
                  </Button>
                </Link>
              </div>
            </Tabs>

            {/* Informações adicionais */}
            <div className="mt-6 border-t pt-6">
              <p className="text-sm text-gray-500">
                Não recebeu o código? Verifique:
              </p>
              <ul className="text-sm text-gray-500 list-disc ml-5 mt-2 space-y-1">
                <li>Sua caixa de spam</li>
                <li>Se o número/email está correto</li>
                <li>Aguarde alguns minutos e tente novamente</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Informação de segurança */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Esta verificação adicional ajuda a proteger sua conta contra acessos não autorizados.
        </p>
      </div>
    </div>
  )
}