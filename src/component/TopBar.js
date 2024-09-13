import { Dropdown } from "flowbite-react";

function TopBar() {
    return(
        <section className="top-bar">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="left-part">
                        <div className="link-part">
                        <a href="#" title="Uncovers-unique-pieces" className="top-nav-link">Uncovers unique pieces</a>
                        </div>
                    </div>
                    <div className="right-part">
                        <div className="flex gap-x-4">
                            <div className="link-part">
                                <a href="#" title="blog" className="top-nav-link">Blog</a>
                            </div>
                            <div className="link-part">
                                <a href="#" title="blog" className="top-nav-link">For makers</a>
                            </div>
                            <div className="link-part">
                            <Dropdown label="£ GBP" inline>
                                <Dropdown.Item>£ GBP</Dropdown.Item>
                                <Dropdown.Item>$ USD</Dropdown.Item>
                                <Dropdown.Item>$ USD</Dropdown.Item>
                                <Dropdown.Item>$ USD</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TopBar;