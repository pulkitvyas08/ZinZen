import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import { ThemesChoice } from "./ThemesChoice";
import { HeaderThemeChoice } from "./HeaderThemeChoice";
import "../../translations/i18n";

export const LandingPageThemeChoice = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Container fluid>
                <Row>
                    <HeaderThemeChoice />
                </Row>
                <Row>
                    <Col sm={1}></Col>
                    <Col>
                        <h3 className="theme-choice-panel-font">
                            {t("themechoice")}
                        </h3>
                        <ThemesChoice />
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </Container>
        </div>
    );
};
