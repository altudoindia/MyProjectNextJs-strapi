export default async function handler(req, res) {

    if (req.method === "POST") {
        let response,
            defaultoption = {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${process.env.AUTH_TOKEN}`
                },
                body: req.body
                
            },
            fetcherUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/contact-us-forms`;
        try {
            const response = await fetch(fetcherUrl, defaultoption);
            const data = await response.json();           
            res.json({ data });
        } catch (e) {
            console.log(e);
            res.status(400).json({ error: e.message });
        }
    } else {
        res
            .status(400)
            .json({
                data: { 
                    error: { 
                        status: 400, 
                        message: "GET method not allowed." 
                    } 
                },
            });
    }
}
