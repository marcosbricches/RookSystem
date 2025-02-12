// src/app/auth/reset-password/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Square, ArrowLeft, Check } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const calculatePasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 6) strength += 25
    if (password.match(/[A-Z]/)) strength += 25
    if (password.match(/[0-9]/)) strength += 25
    if (password.match(/[^A-Za-z0-9]/)) strength += 25
    return strength
  }

  const passwordStrength = calculatePasswordStrength(password)

  const getStrengthColor = (strength: number) => {
    if (strength <= 25) return "bg-destructive"
    if (strength <= 50) return "bg-orange-500"
    if (strength <= 75) return "bg-yellow-500"
    return "bg-green-500"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === confirmPassword && passwordStrength === 100) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md p-6">
          <CardHeader className="space-y-4 flex flex-col items-center">
            <div className="w-12 h-12 bg-green-500 flex items-center justify-center rounded-lg">
              <Check className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Senha alterada com sucesso!
              </h1>
              <p className="text-sm text-muted-foreground">
                Sua nova senha foi definida. Você já pode fazer login com ela.
              </p>
            </div>
          </CardHeader>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              className="w-full"
              size="lg"
              asChild
            >
              <Link href="/auth/login">
                Ir para o login
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
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
              Crie uma nova senha
            </h1>
            <p className="text-sm text-muted-foreground">
              Sua nova senha deve ter pelo menos 6 caracteres e incluir letras maiúsculas, 
              números e símbolos
            </p>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Nova senha</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="space-y-1">
                <Progress 
                  value={passwordStrength} 
                  className={`h-1 ${getStrengthColor(passwordStrength)}`}
                />
                <p className="text-xs text-muted-foreground">
                  Força da senha: {passwordStrength === 100 ? "Forte" : 
                                 passwordStrength >= 75 ? "Boa" : 
                                 passwordStrength >= 50 ? "Média" : 
                                 passwordStrength >= 25 ? "Fraca" : "Muito fraca"}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirme a nova senha</Label>
              <Input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="text-xs text-destructive">
                  As senhas não coincidem
                </p>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button 
              type="submit" 
              className="w-full" 
              size="lg"
              disabled={password !== confirmPassword || passwordStrength !== 100}
            >
              Redefinir senha
            </Button>
            <Link 
              href="/auth/login"
              className="text-sm text-primary hover:underline flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para o login
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}