import { Menu, X } from "lucide-react";
import { SidebarContent } from "./SidebarContent";
import Link from "next/link";
import {
    Drawer,
    DrawerContent,
    DrawerTitle,
    DrawerTrigger,
    DrawerClose,
} from "./ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getProfileData } from "~/lib/data";
import { VerifyIcon } from "../../public/images/icons/verifyIcon";

interface MobileHeaderData {
    profileData: Partial<Profile>;
}

export async function MobileHeader() {
    const profileData = await getProfileData();

    console.log(profileData);


    return (
        <header className="sticky top-0 z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
            <div className="container h-16 flex items-center justify-between w-full px-5">
                <Link href="/" className="font-bold text-xl">
                    {profileData.name}
                </Link>
                <Drawer direction="right">
                    <DrawerTrigger asChild>
                        <button>
                            <Menu />
                        </button>
                    </DrawerTrigger>
                    <DrawerContent className="h-full px-4 py-6">
                        <DrawerTitle asChild className="border-b-2">
                            <div className="block sm:hidden">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex flex-row items-center sm:flex-col gap-3">
                                        <Avatar className="h-10 w-10 sm:h-16 sm:w-16">
                                            <AvatarImage
                                                src={profileData.avatarUrl || ""}
                                                alt={profileData.name || "Avatar"}
                                            />
                                            <AvatarFallback>
                                                {profileData.name ? profileData.name.charAt(0) : "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <h1 className="font-semibold leading-tight text-md sm:text-2xl flex items-center gap-1">
                                                {profileData.name}
                                                <div className="ml-1">
                                                    <VerifyIcon width={15} />
                                                </div>
                                            </h1>
                                            <p className="text-sm font-normal text-zinc-400">@{profileData.name}</p>
                                        </div>
                                    </div>
                                    <DrawerClose asChild>
                                        <button className="p-2 rounded-full hover:bg-muted">
                                            <X />
                                        </button>
                                    </DrawerClose>
                                </div>
                            </div>
                        </DrawerTitle>

                        <SidebarContent isInsideDrawer={true} profileData={profileData} />
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    );
}