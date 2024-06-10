package com.mistertea.netflims.models;

import lombok.Data;
import lombok.Generated;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@Data

public class Movie {
    @Id
    @Generated
    int staticId;

    ObjectId id;
    //Les objectId récupérés chez MongoDb sont autogénérés a chaque fetch. Impossible de générer un ID

    String name;
    String description;
    String image;
}