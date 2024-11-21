"use client"

import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {AnimatePresence, motion} from 'framer-motion'

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function Login() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log('on速八')
    toast({
      title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    })
  }

  return (
    <div className="login w-3/5 mx-auto h-full flex flex-col items-center pt-10">
        <AnimatePresence mode="wait">
            <motion.div
                className="w-full"
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: 50}}
                transition={{ duration: 0.3, delay: .2, }}
                >
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                        <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 50}}
                            transition={{ duration: 0.3, delay: .25, }}>
                            <Button type="submit">Submit</Button>
                        </motion.div>
                    </form>
                </Form>
            </motion.div>
        </AnimatePresence>
    </div>
  )
}
