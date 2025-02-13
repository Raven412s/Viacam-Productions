"use client"
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { menuItems } from "@/data";
import { MenuItem } from "@/types";
import { Menu } from "lucide-react";
import Image from "next/image";

// Recursive function to render nested menus
import Link from "next/link";

export const RenderMenu = ({ items }: { items: MenuItem[] }) => {
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
            className="transition-transform bg-red-300 duration-200 ease-out border-4 rounded-sm border-white
            max-w-40 max-h-[calc(90vh-10rem)] overflow-y-auto overflow-x-hidden"
            >
            {item.subMenu?.length ? <RenderMenu items={item.subMenu} /> : null}
        </DropdownMenuSubContent>
        </DropdownMenuPortal>
      </DropdownMenuSub>

    )
  );
};


  export default function MegaMenu() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={"icon"} variant={"ghost"} className="z-[999] absolute">
            <Menu className="w-8 h-8" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[calc(100vw-10px)]  px-4 mx-1">
          <DropdownMenuLabel className="text-center">
            <Link href={"/"}>VIACAM PRODUCTIONS</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
            <div className="flex justify-between">
            <DropdownMenuGroup className="flex md:flex-wrap w-full flex-col lg:w-1/3  py-4">
                {menuItems.map((category, index) => (
                    <div key={index} className="flex flex-col first:p-0 last:p-0 py-4 w-56 md:ml-12 odd:m-0 items-start">
                    <div className="flex gap-4 items-center text-muted-foreground justify-start">
                        {category.icon && <span >{category.icon}</span>} {/* Render Icon */}
                        {category.title}
                        <DropdownMenuShortcut>⌘{category.title.charAt(0).toUpperCase()}</DropdownMenuShortcut>
                    </div>
                    <div className="lg:h-72 sm:h-fit overflow-y-auto w-full p-2">
                        {category.subMenu?.length ? <RenderMenu items={category.subMenu} /> : <Link href={category.link || "#"}>Go to {category.title}</Link>}
                    </div>
                    </div>
                ))}
                </DropdownMenuGroup>
                <div className="w-1/2 md:flex justify-end items-center m-8 relative hidden">
                <video src="/media/wav.mp4" autoPlay muted loop  className="rounded-xl  object-cover w-full h-1/2 self-start "/>
                <img src="/Logo.png" alt="" className="absolute w-96  self-end " />
                </div>
            </div>
          <DropdownMenuSeparator />
          </DropdownMenuContent>
      </DropdownMenu>
    );
  }
