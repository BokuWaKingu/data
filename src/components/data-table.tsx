import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: Server[] = [
  {
    id: "1",
    nom: "Serveur Principal",
    ip: "192.168.1.100",
    certificat: "SSL",
    derniere_modification: "2023-06-15",
  },
  {
    id: "2",
    nom: "Serveur de Backup",
    ip: "192.168.1.101",
    certificat: "TLS",
    derniere_modification: "2023-06-14",
  },
  {
    id: "3",
    nom: "Serveur de Test",
    ip: "192.168.1.102",
    certificat: "Auto-signé",
    derniere_modification: "2023-06-13",
  },
  {
    id: "4",
    nom: "Serveur de Développement",
    ip: "192.168.1.103",
    certificat: "Aucun",
    derniere_modification: "2023-06-12",
  },
  {
    id: "5",
    nom: "Serveur de Production",
    ip: "192.168.1.104",
    certificat: "SSL",
    derniere_modification: "2023-06-11",
  },
  {
    id: "1",
    nom: "Serveur Principal",
    ip: "192.168.1.100",
    certificat: "SSL",
    derniere_modification: "2023-06-15",
  },
  {
    id: "2",
    nom: "Serveur de Backup",
    ip: "192.168.1.101",
    certificat: "TLS",
    derniere_modification: "2023-06-14",
  },
  {
    id: "3",
    nom: "Serveur de Test",
    ip: "192.168.1.102",
    certificat: "Auto-signé",
    derniere_modification: "2023-06-13",
  },
  {
    id: "4",
    nom: "Serveur de Développement",
    ip: "192.168.1.103",
    certificat: "Aucun",
    derniere_modification: "2023-06-12",
  },
  {
    id: "5",
    nom: "Serveur de Production",
    ip: "192.168.1.104",
    certificat: "SSL",
    derniere_modification: "2023-06-11",
  },
  {
    id: "1",
    nom: "Serveur Principal",
    ip: "192.168.1.100",
    certificat: "SSL",
    derniere_modification: "2023-06-15",
  },
  {
    id: "2",
    nom: "Serveur de Backup",
    ip: "192.168.1.101",
    certificat: "TLS",
    derniere_modification: "2023-06-14",
  },
  {
    id: "3",
    nom: "Serveur de Test",
    ip: "192.168.1.102",
    certificat: "Auto-signé",
    derniere_modification: "2023-06-13",
  },
  {
    id: "4",
    nom: "Serveur de Développement",
    ip: "192.168.1.103",
    certificat: "Aucun",
    derniere_modification: "2023-06-12",
  },
  {
    id: "5",
    nom: "Serveur de Production",
    ip: "192.168.1.104",
    certificat: "SSL",
    derniere_modification: "2023-06-11",
  },
]

export type Server = {
  id: string
  nom: string
  ip: string
  certificat: string
  derniere_modification: string
}

export const columns: ColumnDef<Server>[] = [
  {
    accessorKey: "nom",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nom du serveur
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "ip",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          IP du serveur
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "certificat",
    header: "Certificat",
  },
  {
    accessorKey: "derniere_modification",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date de dernière modification
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const server = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Ouvrir le menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => alert(`Modifier le serveur ${server.nom}`)}
            >
              Modifier
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => alert(`Supprimer le serveur ${server.nom}`)}
            >
              Supprimer
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [globalFilter, setGlobalFilter] = React.useState("")

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      globalFilter,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Rechercher..."
          value={globalFilter ?? ""}
          onChange={(event) => setGlobalFilter(event.target.value)}
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Colonnes <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Aucun résultat.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Précédent
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Suivant
        </Button>
      </div>
    </div>
  )
}

