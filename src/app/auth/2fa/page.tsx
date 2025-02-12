// src/app/auth/2fa/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Square, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"

type AuthMethod = "email" | "sms"

export default function TwoFactorAuthPage() {
  const [method, setMethod] = useState<AuthMethod>("email")
  const [code, setCode] = useState("")
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutos
  const [attempts, setAttempts] = useState(0)
  const [canRequestNew, setCanRequestNew] = useState(true)

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
    setCanRequestNew(true)
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleRequestNew = () => {
    if (canRequestNew && attempts < 3) {
      setTimeLeft(300)
      setCanRequestNew(false)
      setAttempts(prev => prev + 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-6">
        <CardHeader className="space-y-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-lg">
            <Square className="w-8 h-8 text-primary-foreground" />
          </div>
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Verificação em duas etapas
            </h1>
            <p className="text-sm text-muted-foreground">
              Escolha como deseja receber seu código de verificação
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Método de verificação</Label>
            <RadioGroup
              defaultValue="email"
              className="flex flex-col gap-4"
              onValueChange={(value) => setMethod(value as AuthMethod)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email" />
                <Label htmlFor="email" className="cursor-pointer">
                  E-mail secundário (•••@email.com)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sms" id="sms" />
                <Label htmlFor="sms" className="cursor-pointer">
                  SMS ((•••) •••-••89)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <Alert>
            <AlertDescription>
              Um código de {method === "email" ? "6" : "4"} dígitos será enviado para seu {method === "email" ? "e-mail" : "celular"}.
            </AlertDescription>
          </Alert>

          <div className="space-y-2">
            <Label htmlFor="code">Código de verificação</Label>
            <Input
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={method === "email" ? 6 : 4}
              placeholder={method === "email" ? "000000" : "0000"}
              className="text-center text-2xl tracking-widest"
            />
            {timeLeft > 0 && (
              <p className="text-sm text-muted-foreground text-center">
                Código expira em {formatTime(timeLeft)}
              </p>
            )}
          </div>

          {attempts < 3 && canRequestNew && (
            <Button
              variant="ghost"
              className="w-full"
              onClick={handleRequestNew}
            >
              Solicitar novo código
            </Button>
          )}

          {attempts >= 3 && (
            <Alert variant="destructive">
              <AlertDescription>
                Limite de tentativas excedido. Tente novamente em 15 minutos.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            className="w-full" 
            size="lg"
            disabled={code.length !== (method === "email" ? 6 : 4)}
          >
            Verificar
          </Button>
          <Button 
            variant="ghost" 
            className="w-full"
            asChild
          >
            <Link href="/auth/login" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar para o login
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}