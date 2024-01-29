/* eslint-disable no-unused-vars */
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Button,
} from '@nextui-org/react';
import { SearchIcon } from '../../assets/SearchIcon.jsx';
function Header() {
    
    return (
        <>
            <Navbar isBordered>
                <NavbarContent justify="start">
                    <NavbarBrand className="mr-4">
                        <img
                            src="https://bizweb.dktcdn.net/100/260/640/themes/801977/assets/logo.png?1676017321988"
                            alt=""
                            className="w-40 h-7"
                        />
                        <NavbarItem>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button  variant="light"><a href="/trangchu">Trang Chủ</a></Button>
                                </DropdownTrigger>
                              
                            </Dropdown>
                        </NavbarItem>
                        <NavbarItem isActive>
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button variant="light">Sản Phẩm</Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                    variant="flat"
                                    aria-label="Dropdown menu with shortcut"
                                >
                                    <DropdownItem key="Vòng Tay"><Link href='/about'>Vòng tay</Link></DropdownItem>
                                    <DropdownItem key="Dây Chuyền"><Link href='/list'>Dây Chuyền</Link></DropdownItem>
                                    <DropdownItem key="Bông Tai">Bông Tai</DropdownItem>
                                    <DropdownItem key="Đề cử">Sản Phẩm Hót</DropdownItem>
                                    <DropdownItem key="Yêu thích">Yêu thích</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </NavbarItem>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent as="div" className="items-center w-1/4" justify="center">
                    <Input
                        fullWidth="true"
                        placeholder="Tìm kiếm"
                        size="xs"
                        endContent={<SearchIcon size={18} />}
                        type="search"
                        radius="full"
                    />  
                </NavbarContent>

                <NavbarContent as="div" justify="end">
                    <NavbarContent className="hidden sm:flex gap-3" data-justify="end">
                        <NavbarItem className="mr-5">
                            <Link color="foreground" href="#" className="hover:text-red-950">
                                Tin Tức
                            </Link>
                        </NavbarItem>
                        <NavbarItem className="mr-5">
                            <Link color="foreground" href="/login" className="hover:text-red-950">
                                Đăng nhập
                            </Link>
                        </NavbarItem>
                        <NavbarItem className="mr-5">
                            <Link color="foreground" href="/signup" className="hover:text-red-950 ">
                                Đăng kí
                            </Link>
                        </NavbarItem>
                        <NavbarItem className="mr-5 gap-5">
                            <a href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                            </a>
                        </NavbarItem>
                    </NavbarContent>
                </NavbarContent>
            </Navbar>
        </>
    );
}

export default Header;
