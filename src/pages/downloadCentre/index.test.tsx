// src/pages/onlineClasses/index.test.tsx

// Mock Banner, ContactBanner, IFrameBanner, and Link
jest.mock("../../widgets/Banner", () => (props: any) => (
  <div data-testid="banner">{JSON.stringify(props)}</div>
));
jest.mock("../../widgets/ContactBanner", () => () => (
  <div data-testid="contact-banner" />
));
jest.mock("../../widgets/iFrameBanner", () => () => (
  <div data-testid="iframe-banner" />
));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: (props: any) => <a {...props} data-testid="router-link" />,
}));

describe("OnlineClasses", () => {
  const mockData = {
    banner_title: "Test Banner",
    banner_Academics_Admission_text: "Academics",
    banner_Academics_Admission_link: "/academics",
    banner_image: {
      formats: {
        large: { url: "/img.jpg" },
      },
    },
    content: "First paragraph.\n\nSecond paragraph with YouTube Channel.",
    youtube_link: "https://youtube.com/test",
  };

  beforeEach(() => {
    jest.spyOn(onlineClassService, "getOnlineClassData").mockResolvedValue({
      data: mockData,
    } as any);
    jest.spyOn(actualPathService, "getFullImageUrl").mockReturnValue(
      "http://localhost/img.jpg"
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders nothing while loading", () => {
    // Force the component to render before promise resolves
    jest
      .spyOn(onlineClassService, "getOnlineClassData")
      .mockImplementation(() => new Promise(() => {}));
    render(
      <BrowserRouter>
        <OnlineClasses />
      </BrowserRouter>
    );
    expect(screen.queryByTestId("banner")).not.toBeInTheDocument();
  });

  it("renders banner and content after loading", async () => {
    render(
      <BrowserRouter>
        <OnlineClasses />
      </BrowserRouter>
    );
    await waitFor(() => expect(screen.getByTestId("banner")).toBeInTheDocument());
    const bannerProps = JSON.parse(screen.getByTestId("banner").textContent!);
    expect(bannerProps.bannerText).toBe("Test Banner");
    expect(bannerProps.bannerImageUrl).toBe("http://localhost/img.jpg");
    expect(bannerProps.breadCrumbsList[0].label).toBe("Academics");
    expect(bannerProps.breadCrumbsList[0].to).toBe("/academics");
  });

  it("renders paragraphs and YouTube Channel link", async () => {
    render(
      <BrowserRouter>
        <OnlineClasses />
      </BrowserRouter>
    );
    await screen.findByTestId("banner");
    expect(screen.getByText("First paragraph.")).toBeInTheDocument();
    expect(screen.getByText("Second paragraph with ")).toBeInTheDocument();
    const ytLink = screen.getByTestId("router-link");
    expect(ytLink).toHaveAttribute("href", "https://youtube.com/test");
    expect(ytLink).toHaveTextContent("YouTube Channel");
  });

  it("renders iFrameBanner and ContactBanner", async () => {
    render(
      <BrowserRouter>
        <OnlineClasses />
      </BrowserRouter>
    );