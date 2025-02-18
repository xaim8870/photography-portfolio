import { Box, Grid, Image, Text, Heading } from "@chakra-ui/react";
import Portrait from "../components/ui/portraits";

const extractNumber = (path) => {
    const match = path.match(/(\d+)\.jpg(?:\?.*)?$/); // Updated regex to handle query strings
    return match ? parseInt(match[1], 10) : null;
};

const images = import.meta.glob("../assets/selectedImages/*.jpg", { 
    eager: true,
    import: "default"
});

const imagePaths = Object.entries(images)
    .map(([path, module]) => ({ path: module, number: extractNumber(path) }))
    .filter((img) => img.number !== null && img.number >= 1 && img.number <= 8)
    .sort((a, b) => a.number - b.number)
    .map((img) => img.path);

const worksMetadata = {
    1: { title: "Azad Kashmir", description: "Mountain Dawn" },
    2: { title: "Fairy Meadows", description: "Beautiful Green Fields" },
    3: { title: "Hunza Valley", description: "Majestic Mountains" },
    4: { title: "Skardu", description: "Snowy Peaks" },
    5: { title: "Naran Kaghan", description: "River Flowing Through Valley" },
    6: { title: "Shangrila", description: "The Heaven on Earth" },
    7: { title: "Malam Jabba", description: "Ski Resort and Beautiful Views" },
    8: { title: "Swat Valley", description: "Lush Green Landscapes" }
};

const imageData = imagePaths
    .map((path) => {
        const fileNumber = extractNumber(path);
        if (!fileNumber) return null;

        return {
            id: fileNumber,
            path: path,
            type: 'landscape',
            ...worksMetadata[fileNumber] || { title: `Image ${fileNumber}`, description: "No Description" }
        };
    })
    .filter(Boolean);

const SelectedWorks = () => {
    return ( <>
        <Box maxW="container.xl" mx="auto" p={8}>
            <Heading textAlign="center" fontSize="4xl" mb={12}>
                Selected Works
            </Heading>

            <Grid templateColumns="repeat(2, 1fr)" gap={8}>
                {imageData.map((work) => (
                    <Box key={work.id}>
                        <Box w="100%" h="auto" maxH="506px" aspectRatio={16/9} overflow="hidden" borderRadius="md">
                            <Image src={work.path} alt={work.title} w="100%" h="100%" objectFit="cover" />
                        </Box>
                        <Text fontSize="2xl" fontWeight="600" mt={4}>{work.title}</Text>
                        <Text fontSize="md" color="gray.600">{work.description}</Text>
                    </Box>
                ))}
            </Grid>
        </Box>
        <Portrait />
        </>
    );
};

export default SelectedWorks;