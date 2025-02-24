"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { menuItems } from "@/data"
import { cn } from "@/lib/utils"
import { MenuItem } from "@/types"
import Link from "next/link"
import * as React from "react"
import Logo from "./Logo"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"

 const RenderMenu = ({ items }: { items: MenuItem[] }) => {
    return items.map((item, index) =>
        !item.subMenu  ? (
          <Link href={item.link!}>
              <DropdownMenuItem className="max-w-40" key={index}>
                  {item.title}
              </DropdownMenuItem>
          </Link>
      ) : (
          <DropdownMenuSub key={index}>
          <DropdownMenuSubTrigger>
            <span className="flex items-center gap-2">
              {item.icon && <span>{item.icon}</span>} {/* Render icon */}
              {item.title}
            </span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
          <DropdownMenuSubContent
              sideOffset={1}
              className="transition-transform bg-muted duration-200 ease-out border-4 rounded-sm shadow-behind
              max-w-40 "
              >
              {item.subMenu?.length ? <RenderMenu items={item.subMenu} /> : null}
          </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

      )
    );
  };
export function NavMenu() {
  return (
<>
{/* desktop nav */}
<div className="hidden lg:block">
    <Navigation/>
  </div>

  {/* mobile nav */}
  <div className="block lg:hidden">
  <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size={"icon"}><MenuIcon className="w-8 h-8"/></Button>
      </SheetTrigger>
      <SheetContent>
        <Navigation/>
      </SheetContent>
    </Sheet>
  </div>
</>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, icon, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >

          <div className="text-sm font-medium leading-none flex flex-col gap-1">{icon}{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const Navigation = () => {
    return (
        <NavigationMenu>
        <NavigationMenuList className="flex-col lg:flex-row lg:flex ">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-x-3 p-4 w-[40rem]  lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-4">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md relative"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium flex gap-4 items-end justify-start">
                      <Logo/>
                        <h1 className="show min-w-max">Viacam Productions</h1>
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                      Innovative solutions for branding, marketing, web development, design, printing, and corporate growth.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/portfolio" title="Our Works" className="p-0 self-end py-2">
                  Explore our collection of past projects and creative works.
                  </ListItem>
                <ListItem href="/gallery" title="Gallery" className="p-0 self-end py-2">
                  Explore our collection of past projects and creative works.
                  </ListItem>
                  <ListItem href="/about" title="About" className="p-0 self-end py-2">
                  Learn more about our mission, values, and journey.
                  </ListItem>
                  <ListItem href="/team" title="Meet Our Team" className="p-0 self-end py-2">
                  Get to know the talented individuals behind our success.
                  </ListItem>

              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <DropdownMenu>
          <DropdownMenuTrigger asChild>
          <NavigationMenuItem className={navigationMenuTriggerStyle()}>
                Services
          </NavigationMenuItem>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-4 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md relative ">
              <DropdownMenuGroup className="grid grid-cols-2 grid-rows-2 gap-4">
                  {menuItems.map((category, index) => (
                      <div key={index} className="">
                      <div className="flex gap-4 items-center text-muted-foreground justify-start">
                          {category.icon && <span >{category.icon}</span>} {/* Render Icon */}
                          {category.title}
                      </div>
                      <div className="w-full p-2">
                          {category.subMenu?.length ? <RenderMenu items={category.subMenu} /> : <Link href={category.link || "#"}>Go to {category.title}</Link>}
                      </div>
                      </div>
                  ))}
                  </DropdownMenuGroup>
            <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
}
