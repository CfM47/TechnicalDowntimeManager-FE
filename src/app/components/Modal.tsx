import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface GenericModalProps {
  isOpen: boolean
  onClose: () => void
  header: string
  children: React.ReactNode
  footerContent: React.ReactNode
}

export function GenericModal({
                               isOpen,
                               onClose,
                               header,
                               children,
                               footerContent
                             }: GenericModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          {children}
        </div>
        <DialogFooter>
          {footerContent}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/*const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handlePrimaryAction = () => {
    console.log('Primary action clicked')
    closeModal()
  }

  const handleSecondaryAction = () => {
    console.log('Secondary action clicked')
    closeModal()
  }*/
