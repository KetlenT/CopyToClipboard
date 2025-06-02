"use client"
import React, { useState } from 'react'

import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { CheckIcon, ClipboardIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function CopyToClipboard({default: defaultText}: {default?: string}) {
    const [copied, setCopied] = useState(false)
    const [text, setText] = useState(defaultText || '')
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text)
            setCopied(true)
            console.log("Text copied to clipboard:", text)
            toast.success("Text copied to clipboard!", {
                description: 'You can now paste it anywhere.',
            })
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            toast.error("Failed to copy text")
        }
    }

    return (
        <div className="flex items-center space-x-4">
            <div className="flex w-full max-w-sm items-center gap-2">
                <Input type="text" placeholder="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <Button onClick={handleCopy} variant="outline" aria-label="Copy text">
                {copied ? (
                    <CheckIcon className="h-5 w-5 text-green-500" />
                ) : (
                    <ClipboardIcon className="h-5 w-5" />
                )}
            </Button>
        </div>
    )
}


